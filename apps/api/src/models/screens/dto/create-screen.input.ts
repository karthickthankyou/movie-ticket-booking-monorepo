import { InputType, PickType } from '@nestjs/graphql'
import { Screen } from '../entities/screen.entity'

@InputType()
export class CreateScreenInput extends PickType(
  Screen,
  ['cinemaId', 'number'],
  InputType,
) {}
