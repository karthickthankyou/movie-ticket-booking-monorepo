import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { TicketsService } from './tickets.service'
import { Ticket } from './entities/ticket.entity'
import { FindManyTicketArgs, FindUniqueTicketArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Booking } from '../bookings/entities/booking.entity'
import { AggregateCountOutput } from 'src/common/dtos/common.input'
import { TicketWhereInput } from './dto/where.args'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'

@Resolver(() => Ticket)
export class TicketsResolver {
  constructor(
    private readonly ticketsService: TicketsService,
    private readonly prisma: PrismaService,
  ) {}

  @Query(() => [Ticket], { name: 'tickets' })
  findAll(@Args() args: FindManyTicketArgs) {
    return this.ticketsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Ticket], { name: 'myTickets' })
  myTickets(@Args() args: FindManyTicketArgs, @GetUser() user: GetUserType) {
    return this.ticketsService.findAll({
      ...args,
      where: { ...args.where, uid: { equals: user.uid } },
    })
  }

  @Query(() => Ticket, { name: 'ticket' })
  findOne(@Args() args: FindUniqueTicketArgs) {
    return this.ticketsService.findOne(args)
  }

  @Mutation(() => Ticket)
  removeTicket(@Args() args: FindUniqueTicketArgs) {
    return this.ticketsService.remove(args)
  }

  @ResolveField(() => [Booking])
  bookings(@Parent() parent: Ticket) {
    return this.prisma.booking.findMany({ where: { ticketId: parent.id } })
  }

  @Query(() => AggregateCountOutput, {
    name: 'ticketsCount',
  })
  async ticketsCount(
    @Args('where', { nullable: true })
    where: TicketWhereInput,
  ) {
    const tickets = await this.prisma.ticket.aggregate({
      _count: { _all: true },
      where,
    })
    return { count: tickets._count._all }
  }
}
