import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ScreenOrderByWithRelationInput } from './orderBy.args'
import { ScreenWhereInput, ScreenWhereUniqueInput } from './where.args'

registerEnumType(Prisma.ScreenScalarFieldEnum, {
  name: 'ScreenScalarFieldEnum',
})

@ArgsType()
export class FindManyScreenArgs
  implements Required<Omit<Prisma.ScreenFindManyArgs, 'include' | 'select'>>
{
  @Field(() => ScreenWhereInput, { nullable: true })
  where: ScreenWhereInput
  @Field(() => [ScreenOrderByWithRelationInput], { nullable: true })
  orderBy: ScreenOrderByWithRelationInput[]
  @Field(() => ScreenWhereUniqueInput, { nullable: true })
  cursor: ScreenWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.ScreenScalarFieldEnum], { nullable: true })
  distinct: Prisma.ScreenScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueScreenArgs {
  @Field({ nullable: true })
  where: ScreenWhereUniqueInput
}
