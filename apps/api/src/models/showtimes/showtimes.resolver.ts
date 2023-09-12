import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { ShowtimesService } from './showtimes.service'
import {
  GroupedShowtime,
  RemainingSeats,
  Showtime,
} from './entities/showtime.entity'
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
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/guards'
import { Prisma } from '@prisma/client'
import { BatchPayload } from 'src/common/dtos/common.input'

@Resolver(() => Showtime)
export class ShowtimesResolver {
  constructor(
    private readonly showtimesService: ShowtimesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => BatchPayload)
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
      screen?.cinema.managers.map((m) => m.uid),
    )

    const showtimes: Prisma.ShowtimeCreateManyInput[] = args.showtimes.map(
      (showtime) => ({
        screenId: args.screenId,
        movieId: args.movieId,
        startTime: new Date(showtime),
      }),
    )
    const newShowtimes = await this.prisma.showtime.createMany({
      data: showtimes,
    })
    return newShowtimes
  }

  @Query(() => [Showtime], { name: 'showtimes' })
  findAll(@Args() args: FindManyShowtimeArgs) {
    return this.showtimesService.findAll(args)
  }

  @Query(() => [GroupedShowtime], { name: 'showtimesInCinema' })
  async showtimesInCinema(
    @Args('cinemaId') cinemaId: number,
    @Args('movieId') movieId: number,
  ) {
    const shows: any[] = await this.prisma.$queryRaw`
        SELECT
        DATE("startTime") AS date,
        ARRAY_AGG(
            json_build_object(
            'id', "Showtime"."id",
            'startTime', EXTRACT(EPOCH FROM "startTime") * 1000,
            'screen', "Screen"
            )
        ) AS showtimes
        FROM "Showtime"
        JOIN "Screen" ON "Showtime"."screenId" = "Screen"."id"
        WHERE "Showtime"."movieId" = ${movieId} AND "Screen"."cinemaId" = ${cinemaId} AND "Showtime"."startTime" > NOW()
        GROUP BY DATE("startTime")
        ORDER BY DATE("startTime");
`

    return shows
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
    const showtime = await this.prisma.showtime.findUnique({
      where: { id: args.id },
      include: {
        screen: { include: { cinema: { include: { managers: true } } } },
      },
    })
    checkRowLevelPermission(
      user,
      showtime.screen.cinema.managers.map((m) => m.uid),
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

  @Query(() => RemainingSeats)
  async bookedSeatsInShowtime(@Args('showtimeId') showtimeId: number) {
    const showtime = await this.prisma.showtime.findUnique({
      where: { id: showtimeId },
    })
    const total = await this.prisma.seat.count({
      where: { screenId: showtime.screenId },
    })
    const booked = await this.prisma.booking.count({
      where: { showtimeId: showtimeId },
    })
    console.log(total, booked)
    return { total, booked }
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
