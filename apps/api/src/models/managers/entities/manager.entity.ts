import { ObjectType } from '@nestjs/graphql'
import { Manager as ManagerType } from '@prisma/client'

@ObjectType()
export class Manager implements ManagerType {
  uid: string
  createdAt: Date
  updatedAt: Date
  name: string
  cinemaId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
