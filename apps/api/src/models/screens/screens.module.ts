import { Module } from '@nestjs/common'
import { ScreensService } from './screens.service'
import { ScreensResolver } from './screens.resolver'

@Module({
  providers: [ScreensResolver, ScreensService],
  exports: [ScreensService],
})
export class ScreensModule {}
