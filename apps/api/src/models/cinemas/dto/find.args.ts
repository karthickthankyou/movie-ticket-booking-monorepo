import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CinemaOrderByWithRelationInput } from './orderBy.args'
import { CinemaWhereInput, CinemaWhereUniqueInput } from './where.args'

registerEnumType(Prisma.CinemaScalarFieldEnum, {
  name: 'CinemaScalarFieldEnum',
})

@ArgsType()
export class FindManyCinemaArgs
  implements Required<Omit<Prisma.CinemaFindManyArgs, 'include' | 'select'>>
{
  @Field(() => CinemaWhereInput, { nullable: true })
  where: CinemaWhereInput
  @Field(() => [CinemaOrderByWithRelationInput], { nullable: true })
  orderBy: CinemaOrderByWithRelationInput[]
  @Field(() => CinemaWhereUniqueInput, { nullable: true })
  cursor: CinemaWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.CinemaScalarFieldEnum], { nullable: true })
  distinct: Prisma.CinemaScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueCinemaArgs {
  @Field({ nullable: true })
  where: CinemaWhereUniqueInput
}
