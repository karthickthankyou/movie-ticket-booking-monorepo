import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SeatOrderByWithRelationInput } from 'src/models/seats/dto/orderBy.args'
import { ShowtimeOrderByWithRelationInput } from 'src/models/showtimes/dto/orderBy.args'
import { UserOrderByWithRelationInput } from 'src/models/users/dto/orderBy.args'

@InputType()
export class BookingOrderByWithRelationInput
  implements Required<Prisma.BookingOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  userId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  showtimeId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  seatId: Prisma.SortOrder
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user: UserOrderByWithRelationInput
  @Field(() => ShowtimeOrderByWithRelationInput, { nullable: true })
  showtime: ShowtimeOrderByWithRelationInput
  @Field(() => SeatOrderByWithRelationInput, { nullable: true })
  seat: SeatOrderByWithRelationInput
}

@InputType()
export class BookingOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
