import { Field, InputType, PickType } from '@nestjs/graphql'
import { Cinema } from '../entities/cinema.entity'
import { CreateManagerInputWithoutCinemaId } from 'src/models/managers/dto/create-manager.input'
import { CreateAddressInputWithoutCinemaId } from 'src/models/addresses/dto/create-address.input'
import { CreateScreenInputWithoutCinemaId } from 'src/models/screens/dto/create-screen.input'

@InputType()
export class CreateCinemaInput extends PickType(Cinema, ['name'], InputType) {
  @Field(() => CreateManagerInputWithoutCinemaId)
  manager: CreateManagerInputWithoutCinemaId
  @Field(() => CreateAddressInputWithoutCinemaId)
  address: CreateAddressInputWithoutCinemaId
  @Field(() => [CreateScreenInputWithoutCinemaId])
  screens: CreateScreenInputWithoutCinemaId[]
}
