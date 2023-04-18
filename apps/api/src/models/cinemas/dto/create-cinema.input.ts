import { Field, InputType, PickType } from '@nestjs/graphql'
import { Cinema } from '../entities/cinema.entity'
import { CreateManagerInputWithoutCinemaId } from 'src/models/managers/dto/create-manager.input'

@InputType()
export class CreateCinemaInput extends PickType(Cinema, ['name'], InputType) {
  @Field(() => CreateManagerInputWithoutCinemaId)
  manager: CreateManagerInputWithoutCinemaId
}
