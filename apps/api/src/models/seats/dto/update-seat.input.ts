import { CreateSeatInput } from './create-seat.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Seat } from '@prisma/client'

@InputType()
export class UpdateSeatInput extends PartialType(CreateSeatInput) {
  id: Seat['id']
}
