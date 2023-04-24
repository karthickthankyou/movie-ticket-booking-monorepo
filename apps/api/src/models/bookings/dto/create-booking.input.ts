import { Field, InputType, PickType } from '@nestjs/graphql'
import { Booking } from '../entities/booking.entity'

@InputType()
export class RowColumn {
  row: number
  column: number
}

@InputType()
export class CreateBookingInput extends PickType(
  Booking,
  ['screenId', 'showtimeId', 'userId'],
  InputType,
) {
  @Field(() => [RowColumn])
  seats: RowColumn[]
}
