import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CinemaOrderByWithRelationInput } from 'src/models/cinemas/dto/orderBy.args'

@InputType()
export class ManagerOrderByWithRelationInput
  implements Required<Prisma.ManagerOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  cinemaId: Prisma.SortOrder
  @Field(() => CinemaOrderByWithRelationInput, { nullable: true })
  cinema: CinemaOrderByWithRelationInput
}

@InputType()
export class ManagerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
