import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/dto/orderBy.args'
import { MovieOrderByWithRelationInput } from 'src/models/movies/dto/orderBy.args'
import { ScreenOrderByWithRelationInput } from 'src/models/screens/dto/orderBy.args'

@InputType()
export class ShowtimeOrderByWithRelationInput
  implements Required<Prisma.ShowtimeOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  startTime: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  endTime: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  movieId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  screenId: Prisma.SortOrder
  @Field(() => MovieOrderByWithRelationInput, { nullable: true })
  movie: MovieOrderByWithRelationInput
  @Field(() => ScreenOrderByWithRelationInput, { nullable: true })
  screen: ScreenOrderByWithRelationInput
  @Field(() => BookingOrderByRelationAggregateInput, { nullable: true })
  bookings: BookingOrderByRelationAggregateInput
}

@InputType()
export class ShowtimeOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
