import { Field, ObjectType } from '@nestjs/graphql'
import { Booking as BookingType } from '@prisma/client'

@ObjectType()
export class Booking implements BookingType {
  @Field({ nullable: true })
  ticketId: number
  row: number
  column: number
  screenId: number
  id: number
  createdAt: Date
  updatedAt: Date
  userId: string
  showtimeId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
