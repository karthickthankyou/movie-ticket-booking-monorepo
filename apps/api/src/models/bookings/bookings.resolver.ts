import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { BookingsService } from './bookings.service'
import { Booking } from './entities/booking.entity'
import { FindManyBookingArgs, FindUniqueBookingArgs } from './dto/find.args'
import { CreateBookingInput } from './dto/create-booking.input'
import { UpdateBookingInput } from './dto/update-booking.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from '../users/entities/user.entity'
import { Showtime } from '../showtimes/entities/showtime.entity'
import { Seat } from '../seats/entities/seat.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@booking-org/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(
    private readonly bookingsService: BookingsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Booking)
  createBooking(
    @Args('createBookingInput') args: CreateBookingInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.userId)
    return this.bookingsService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Booking], { name: 'bookings' })
  findAll(@Args() args: FindManyBookingArgs) {
    return this.bookingsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => Booking, { name: 'booking' })
  async findOne(
    @Args() args: FindUniqueBookingArgs,
    @GetUser() user: GetUserType,
  ) {
    const booking = await this.bookingsService.findOne(args)
    checkRowLevelPermission(user, booking.userId)
    return booking
  }

  @AllowAuthenticated()
  @Mutation(() => Booking)
  async updateBooking(
    @Args('updateBookingInput') args: UpdateBookingInput,
    @GetUser() user: GetUserType,
  ) {
    const booking = await this.bookingsService.findOne({
      where: args,
    })
    checkRowLevelPermission(user, booking.userId)

    return this.bookingsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Booking)
  async removeBooking(
    @Args() args: FindUniqueBookingArgs,
    @GetUser() user: GetUserType,
  ) {
    const booking = await this.bookingsService.findOne(args)
    checkRowLevelPermission(user, booking.userId)
    return this.bookingsService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() booking: Booking) {
    return this.prisma.user.findUnique({ where: { uid: booking.userId } })
  }

  @ResolveField(() => Showtime)
  showtime(@Parent() booking: Booking) {
    return this.prisma.showtime.findUnique({
      where: { id: booking.showtimeId },
    })
  }
  @ResolveField(() => Seat)
  seat(@Parent() booking: Booking) {
    return this.prisma.seat.findUnique({
      where: { id: booking.seatId },
    })
  }
}
