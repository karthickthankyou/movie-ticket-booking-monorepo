import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CinemaOrderByWithRelationInput } from 'src/models/cinemas/dto/orderBy.args'

@InputType()
export class AddressOrderByWithRelationInput
  implements Required<Prisma.AddressOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  cinemaId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  address: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  lat: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  lng: Prisma.SortOrder
  @Field(() => CinemaOrderByWithRelationInput, { nullable: true })
  cinema: CinemaOrderByWithRelationInput
  // Todo: Add properties
  // @Field(() => Prisma.SortOrder, { nullable: true })
  // id: Prisma.SortOrder
}

@InputType()
export class AddressOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
