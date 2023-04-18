import { ObjectType } from '@nestjs/graphql'
import { Cinema as CinemaType } from '@prisma/client'

@ObjectType()
export class Cinema implements CinemaType {
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
