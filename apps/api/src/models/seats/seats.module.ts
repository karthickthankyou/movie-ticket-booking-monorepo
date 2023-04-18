import { Module } from '@nestjs/common'
import { SeatsService } from './seats.service'
import { SeatsResolver } from './seats.resolver'

@Module({
  providers: [SeatsResolver, SeatsService],
  exports: [SeatsService],
})
export class SeatsModule {}
