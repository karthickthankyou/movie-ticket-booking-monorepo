import { InputType, PickType } from '@nestjs/graphql'
import { Showtime } from '../entities/showtime.entity'

@InputType()
export class CreateShowtimeInput extends PickType(
  Showtime,
  ['startTime', 'endTime', 'screenId', 'movieId'],
  InputType,
) {}
