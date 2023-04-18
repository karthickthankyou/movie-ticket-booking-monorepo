import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/dto/orderBy.args'

@InputType()
export class UserOrderByWithRelationInput
  implements Required<Prisma.UserOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder
  @Field(() => BookingOrderByRelationAggregateInput, { nullable: true })
  bookings: BookingOrderByRelationAggregateInput
}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
