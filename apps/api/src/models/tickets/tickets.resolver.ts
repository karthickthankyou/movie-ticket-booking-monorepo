import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TicketsService } from './tickets.service'
import { Ticket } from './entities/ticket.entity'
import { FindManyTicketArgs, FindUniqueTicketArgs } from './dto/find.args'

@Resolver(() => Ticket)
export class TicketsResolver {
  constructor(private readonly ticketsService: TicketsService) {}

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
}
