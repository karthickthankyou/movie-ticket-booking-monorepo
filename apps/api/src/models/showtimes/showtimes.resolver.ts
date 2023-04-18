import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { ShowtimesService } from './showtimes.service'
import { Showtime } from './entities/showtime.entity'
import { FindManyShowtimeArgs, FindUniqueShowtimeArgs } from './dto/find.args'
import { CreateShowtimeInput } from './dto/create-showtime.input'
import { UpdateShowtimeInput } from './dto/update-showtime.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Movie } from '../movies/entities/movie.entity'
import { Booking } from '../bookings/entities/booking.entity'
import { Screen } from '../screens/entities/screen.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@booking-org/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => Showtime)
export class ShowtimesResolver {
  constructor(
    private readonly showtimesService: ShowtimesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => Showtime)
  async createShowtime(
    @Args('createShowtimeInput') args: CreateShowtimeInput,
    @GetUser() user: GetUserType,
  ) {
    const screen = await this.prisma.screen.findUnique({
      where: { id: args.screenId },
      include: { cinema: { include: { managers: true } } },
    })
    checkRowLevelPermission(
      user,
      screen.cinema.managers.map((m) => m.uid),
    )
    return this.showtimesService.create(args)
  }

  @Query(() => [Showtime], { name: 'showtimes' })
  findAll(@Args() args: FindManyShowtimeArgs) {
    return this.showtimesService.findAll(args)
  }

  @Query(() => Showtime, { name: 'showtime' })
  findOne(@Args() args: FindUniqueShowtimeArgs) {
    return this.showtimesService.findOne(args)
  }

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => Showtime)
  async updateShowtime(
    @Args('updateShowtimeInput') args: UpdateShowtimeInput,
    @GetUser() user: GetUserType,
  ) {
    const screen = await this.prisma.screen.findUnique({
      where: { id: args.screenId },
      include: { cinema: { include: { managers: true } } },
    })
    checkRowLevelPermission(
      user,
      screen.cinema.managers.map((m) => m.uid),
    )
    return this.showtimesService.update(args)
  }

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => Showtime)
  async removeShowtime(
    @Args() args: FindUniqueShowtimeArgs,
    @GetUser() user: GetUserType,
  ) {
    const showtime = await this.prisma.showtime.findUnique({
      where: { id: args.where.id },
      include: {
        screen: { include: { cinema: { include: { managers: true } } } },
      },
    })
    checkRowLevelPermission(
      user,
      showtime.screen.cinema.managers.map((m) => m.uid),
    )
    return this.showtimesService.remove(args)
  }

  @ResolveField(() => Screen)
  screen(@Parent() showtime: Showtime) {
    return this.prisma.screen.findUnique({ where: { id: showtime.screenId } })
  }
  @ResolveField(() => Movie)
  movie(@Parent() showtime: Showtime) {
    return this.prisma.movie.findUnique({ where: { id: showtime.movieId } })
  }

  @ResolveField(() => [Booking])
  Booking(@Parent() showtime: Showtime) {
    return this.prisma.booking.findMany({ where: { showtimeId: showtime.id } })
  }
}
