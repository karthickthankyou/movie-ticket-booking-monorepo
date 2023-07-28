import { ObjectType } from '@nestjs/graphql'
import { Admin as AdminType } from '@prisma/client'

@ObjectType()
export class Admin implements AdminType {
  uid: string
  createdAt: Date
  updatedAt: Date
  name: string
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
