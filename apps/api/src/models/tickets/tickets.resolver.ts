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
}
