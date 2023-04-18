import { ObjectType } from '@nestjs/graphql'
import { Screen as ScreenType } from '@prisma/client'

@ObjectType()
export class Screen implements ScreenType {
  id: number
  createdAt: Date
  updatedAt: Date
  number: number
  cinemaId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
