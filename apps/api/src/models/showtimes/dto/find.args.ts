import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ShowtimeOrderByWithRelationInput } from './orderBy.args'
import { ShowtimeWhereInput, ShowtimeWhereUniqueInput } from './where.args'

registerEnumType(Prisma.ShowtimeScalarFieldEnum, {
  name: 'ShowtimeScalarFieldEnum',
})

@ArgsType()
export class FindManyShowtimeArgs
  implements Required<Omit<Prisma.ShowtimeFindManyArgs, 'include' | 'select'>>
{
  @Field(() => ShowtimeWhereInput, { nullable: true })
  where: ShowtimeWhereInput
  @Field(() => [ShowtimeOrderByWithRelationInput], { nullable: true })
  orderBy: ShowtimeOrderByWithRelationInput[]
  @Field(() => ShowtimeWhereUniqueInput, { nullable: true })
  cursor: ShowtimeWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.ShowtimeScalarFieldEnum], { nullable: true })
  distinct: Prisma.ShowtimeScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueShowtimeArgs {
  @Field({ nullable: true })
  where: ShowtimeWhereUniqueInput
}
