import { ObjectType } from '@nestjs/graphql'
import { Seat as SeatType } from '@prisma/client'

@ObjectType()
export class Seat implements SeatType {
  createdAt: Date
  updatedAt: Date
  row: number
  column: number
  screenId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
