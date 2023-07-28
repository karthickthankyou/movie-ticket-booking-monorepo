import { Module } from '@nestjs/common'
import { BookingsService } from './bookings.service'
import { BookingsResolver } from './bookings.resolver'
import { UsersService } from '../users/users.service'

@Module({
  providers: [BookingsResolver, BookingsService, UsersService],
  exports: [BookingsService],
})
export class BookingsModule {}
