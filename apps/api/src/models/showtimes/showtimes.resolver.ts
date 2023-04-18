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

@Resolver(() => Showtime)
export class ShowtimesResolver {
  constructor(
    private readonly showtimesService: ShowtimesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Showtime)
  createShowtime(@Args('createShowtimeInput') args: CreateShowtimeInput) {
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

  @Mutation(() => Showtime)
  updateShowtime(@Args('updateShowtimeInput') args: UpdateShowtimeInput) {
    return this.showtimesService.update(args)
  }

  @Mutation(() => Showtime)
  removeShowtime(@Args() args: FindUniqueShowtimeArgs) {
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
