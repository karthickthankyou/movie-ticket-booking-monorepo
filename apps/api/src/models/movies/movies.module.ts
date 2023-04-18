import { Module } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { MoviesResolver } from './movies.resolver'

@Module({
  providers: [MoviesResolver, MoviesService],
  exports: [MoviesService],
})
export class MoviesModule {}
