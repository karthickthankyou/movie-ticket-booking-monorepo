import { Module } from '@nestjs/common'
import { ShowtimesService } from './showtimes.service'
import { ShowtimesResolver } from './showtimes.resolver'

@Module({
  providers: [ShowtimesResolver, ShowtimesService],
  exports: [ShowtimesService],
})
export class ShowtimesModule {}
