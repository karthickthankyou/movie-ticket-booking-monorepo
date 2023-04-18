import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { SeatsService } from './seats.service'
import { Seat } from './entities/seat.entity'
import { FindManySeatArgs, FindUniqueSeatArgs } from './dto/find.args'
import { CreateSeatInput } from './dto/create-seat.input'
import { UpdateSeatInput } from './dto/update-seat.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Booking } from '../bookings/entities/booking.entity'
import { Screen } from '../screens/entities/screen.entity'

@Resolver(() => Seat)
export class SeatsResolver {
  constructor(
    private readonly seatsService: SeatsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Seat)
  createSeat(@Args('createSeatInput') args: CreateSeatInput) {
    return this.seatsService.create(args)
  }

  @Query(() => [Seat], { name: 'seats' })
  findAll(@Args() args: FindManySeatArgs) {
    return this.seatsService.findAll(args)
  }

  @Query(() => Seat, { name: 'seat' })
  findOne(@Args() args: FindUniqueSeatArgs) {
    return this.seatsService.findOne(args)
  }

  @Mutation(() => Seat)
  updateSeat(@Args('updateSeatInput') args: UpdateSeatInput) {
    return this.seatsService.update(args)
  }

  @Mutation(() => Seat)
  removeSeat(@Args() args: FindUniqueSeatArgs) {
    return this.seatsService.remove(args)
  }

  @ResolveField(() => Screen)
  screen(@Parent() seat: Seat) {
    return this.prisma.screen.findUnique({ where: { id: seat.screenId } })
  }

  @ResolveField(() => [Booking])
  bookings(@Parent() seat: Seat) {
    return this.prisma.booking.findMany({ where: { seatId: seat.id } })
  }
}
