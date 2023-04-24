import { ObjectType } from '@nestjs/graphql'
import { Ticket as TicketType } from '@prisma/client'

@ObjectType()
export class Ticket implements TicketType {
  id: number
  uid: string
  qrCode: string
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
