import { Module } from '@nestjs/common'
import { TicketsService } from './tickets.service'
import { TicketsResolver } from './tickets.resolver'

@Module({
  providers: [TicketsResolver, TicketsService],
  exports: [TicketsService],
})
export class TicketsModule {}
