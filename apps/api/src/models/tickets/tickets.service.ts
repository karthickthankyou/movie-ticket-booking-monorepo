import { Injectable } from '@nestjs/common'
import { FindManyTicketArgs, FindUniqueTicketArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(args: FindManyTicketArgs) {
    return this.prisma.ticket.findMany(args)
  }

  findOne(args: FindUniqueTicketArgs) {
    return this.prisma.ticket.findUnique(args)
  }

  remove(args: FindUniqueTicketArgs) {
    return this.prisma.ticket.delete(args)
  }
}
