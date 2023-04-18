import { Module } from '@nestjs/common'
import { CinemasService } from './cinemas.service'
import { CinemasResolver } from './cinemas.resolver'

@Module({
  providers: [CinemasResolver, CinemasService],
  exports: [CinemasService],
})
export class CinemasModule {}
