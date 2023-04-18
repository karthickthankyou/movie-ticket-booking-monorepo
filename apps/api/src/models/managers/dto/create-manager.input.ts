import { InputType, PickType } from '@nestjs/graphql'
import { Manager } from '../entities/manager.entity'

@InputType()
export class CreateManagerInput extends PickType(
  Manager,
  ['name', 'uid', 'cinemaId'],
  InputType,
) {}
@InputType()
export class CreateManagerInputWithoutCinemaId extends PickType(
  CreateManagerInput,
  ['name', 'uid'],
  InputType,
) {}
