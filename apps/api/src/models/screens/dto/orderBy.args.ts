import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CinemaOrderByWithRelationInput } from 'src/models/cinemas/dto/orderBy.args'
import { SeatOrderByRelationAggregateInput } from 'src/models/seats/dto/orderBy.args'
import { ShowtimeOrderByRelationAggregateInput } from 'src/models/showtimes/dto/orderBy.args'

@InputType()
export class ScreenOrderByWithRelationInput
  implements Required<Prisma.ScreenOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  number: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  cinemaId: Prisma.SortOrder
  @Field(() => CinemaOrderByWithRelationInput, { nullable: true })
  cinema: CinemaOrderByWithRelationInput
  @Field(() => ShowtimeOrderByRelationAggregateInput, { nullable: true })
  showtimes: ShowtimeOrderByRelationAggregateInput
  @Field(() => SeatOrderByRelationAggregateInput, { nullable: true })
  seats: SeatOrderByRelationAggregateInput
}

@InputType()
export class ScreenOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
