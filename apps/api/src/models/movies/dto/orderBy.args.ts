import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ShowtimeOrderByRelationAggregateInput } from 'src/models/showtimes/dto/orderBy.args'

@InputType()
export class MovieOrderByWithRelationInput
  implements Required<Prisma.MovieOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  director: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  genre: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  duration: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  releaseDate: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  posterUrl: Prisma.SortOrder
  @Field(() => ShowtimeOrderByRelationAggregateInput, { nullable: true })
  showtimes: ShowtimeOrderByRelationAggregateInput
}

@InputType()
export class MovieOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
