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

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(
    private readonly bookingsService: BookingsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Booking)
  createBooking(@Args('createBookingInput') args: CreateBookingInput) {
    return this.bookingsService.create(args)
  }

  @Query(() => [Booking], { name: 'bookings' })
  findAll(@Args() args: FindManyBookingArgs) {
    return this.bookingsService.findAll(args)
  }

  @Query(() => Booking, { name: 'booking' })
  findOne(@Args() args: FindUniqueBookingArgs) {
    return this.bookingsService.findOne(args)
  }

  @Mutation(() => Booking)
  updateBooking(@Args('updateBookingInput') args: UpdateBookingInput) {
    return this.bookingsService.update(args)
  }

  @Mutation(() => Booking)
  removeBooking(@Args() args: FindUniqueBookingArgs) {
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
