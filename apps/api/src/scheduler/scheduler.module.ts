import { Module } from '@nestjs/common'
import { SchedulerResolver } from './scheduler.resolver'
import { SchedulerService } from './scheduler.service'

@Module({
  providers: [SchedulerResolver, SchedulerService],
  exports: [SchedulerService],
})
export class SchedulerModule {}
