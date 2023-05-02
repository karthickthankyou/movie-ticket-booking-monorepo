import { Mutation, Resolver } from '@nestjs/graphql'
import { AllowAuthenticated } from 'src/common/decorators/auth/auth.decorator'
import { SchedulerService } from './scheduler.service'
import { Showtime } from 'src/models/showtimes/entities/showtime.entity'
import { Cron, CronExpression } from '@nestjs/schedule'

@AllowAuthenticated('admin')
@Resolver()
export class SchedulerResolver {
  constructor(private readonly schedulerService: SchedulerService) {}

  @Mutation(() => [Showtime])
  runScheduler() {
    return this.schedulerService.handleCron()
  }
  @Cron(CronExpression.EVERY_DAY_AT_6AM)
  autoShowtimeCreator() {
    return this.schedulerService.handleCron()
  }
}
