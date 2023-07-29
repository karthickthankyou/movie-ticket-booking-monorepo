import { Field, Float, ObjectType } from '@nestjs/graphql'
import { Address as AddressType } from '@prisma/client'

@ObjectType()
export class Address implements AddressType {
  id: number
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  cinemaId: number
  address: string
  @Field(() => Float)
  lat: number
  @Field(() => Float)
  lng: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
