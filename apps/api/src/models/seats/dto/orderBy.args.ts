import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/dto/orderBy.args'
import { ScreenOrderByWithRelationInput } from 'src/models/screens/dto/orderBy.args'

@InputType()
export class SeatOrderByWithRelationInput
  implements Required<Prisma.SeatOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  row: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  column: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  screenId: Prisma.SortOrder
  @Field(() => ScreenOrderByWithRelationInput, { nullable: true })
  screen: ScreenOrderByWithRelationInput
  @Field(() => BookingOrderByRelationAggregateInput, { nullable: true })
  bookings: BookingOrderByRelationAggregateInput
}

@InputType()
export class SeatOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
