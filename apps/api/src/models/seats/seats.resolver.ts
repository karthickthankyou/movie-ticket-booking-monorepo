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
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { checkRowLevelPermission } from 'src/common/guards'
import { GetUserType } from '@booking-org/types'

@Resolver(() => Seat)
export class SeatsResolver {
  constructor(
    private readonly seatsService: SeatsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => Seat)
  async createSeat(
    @Args('createSeatInput') args: CreateSeatInput,
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
  async updateSeat(
    @Args('updateSeatInput') args: UpdateSeatInput,
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
    return this.seatsService.update(args)
  }

  @Mutation(() => Seat)
  async removeSeat(
    @Args() args: FindUniqueSeatArgs,
    @GetUser() user: GetUserType,
  ) {
    const seat = await this.prisma.seat.findUnique({
      where: { id: args.where.id },
      include: {
        screen: { include: { cinema: { include: { managers: true } } } },
      },
    })
    checkRowLevelPermission(
      user,
      seat.screen.cinema.managers.map((m) => m.uid),
    )
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
