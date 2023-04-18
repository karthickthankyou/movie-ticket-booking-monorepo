import { CreateScreenInput } from './create-screen.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Screen } from '@prisma/client'

@InputType()
export class UpdateScreenInput extends PartialType(CreateScreenInput) {
  id: Screen['id']
}
