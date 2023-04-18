import { Field, Float, ObjectType } from '@nestjs/graphql'
import { Address as AddressType } from '@prisma/client'

@ObjectType()
export class Address implements AddressType {
  id: number
  createdAt: Date
  updatedAt: Date
  cinemaId: number
  address: string
  @Field(() => Float, { nullable: true })
  lat: number
  @Field(() => Float, { nullable: true })
  lng: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
