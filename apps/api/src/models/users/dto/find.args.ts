import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UserOrderByWithRelationInput } from './orderBy.args'
import { UserWhereInput, UserWhereUniqueInput } from './where.args'

registerEnumType(Prisma.UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
})

@ArgsType()
export class FindManyUserArgs
  implements Required<Omit<Prisma.UserFindManyArgs, 'include' | 'select'>>
{
  @Field(() => UserWhereInput, { nullable: true })
  where: UserWhereInput
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy: UserOrderByWithRelationInput[]
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor: UserWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.UserScalarFieldEnum], { nullable: true })
  distinct: Prisma.UserScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueUserArgs {
  @Field({ nullable: true })
  where: UserWhereUniqueInput
}
