import { CreateCinemaInput } from './create-cinema.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Cinema } from '@prisma/client'

@InputType()
export class UpdateCinemaInput extends PartialType(CreateCinemaInput) {
  id: Cinema['id']
}
