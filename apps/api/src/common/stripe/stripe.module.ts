import { Module } from '@nestjs/common'

import { StripeController } from './stripe.controller'
import StripeService from './stripe.service'
import { BookingsService } from 'src/models/bookings/bookings.service'
import { UsersService } from 'src/models/users/users.service'

@Module({
  controllers: [StripeController],
  providers: [StripeService, BookingsService, UsersService],
})
export class StripeModule {}
