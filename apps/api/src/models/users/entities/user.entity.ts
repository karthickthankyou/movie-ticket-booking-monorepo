import { ObjectType } from '@nestjs/graphql'
import { User as UserType } from '@prisma/client'

@ObjectType()
export class User implements UserType {
  uid: string
  createdAt: Date
  updatedAt: Date
  name: string
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
