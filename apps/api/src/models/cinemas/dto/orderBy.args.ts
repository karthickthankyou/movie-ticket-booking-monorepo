import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AddressOrderByWithRelationInput } from 'src/models/addresses/dto/orderBy.args'
import { ManagerOrderByRelationAggregateInput } from 'src/models/managers/dto/orderBy.args'
import { ScreenOrderByRelationAggregateInput } from 'src/models/screens/dto/orderBy.args'

@InputType()
export class CinemaOrderByWithRelationInput
  implements Required<Prisma.CinemaOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder
  @Field(() => ScreenOrderByRelationAggregateInput, { nullable: true })
  screens: ScreenOrderByRelationAggregateInput
  @Field(() => ManagerOrderByRelationAggregateInput, { nullable: true })
  managers: ManagerOrderByRelationAggregateInput
  @Field(() => AddressOrderByWithRelationInput, { nullable: true })
  address: AddressOrderByWithRelationInput
}

@InputType()
export class CinemaOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
