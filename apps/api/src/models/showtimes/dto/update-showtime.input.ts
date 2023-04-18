import { CreateShowtimeInput } from './create-showtime.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Showtime } from '@prisma/client'

@InputType()
export class UpdateShowtimeInput extends PartialType(CreateShowtimeInput) {
  id: Showtime['id']
}
