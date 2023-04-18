import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ManagerOrderByWithRelationInput } from './orderBy.args'
import { ManagerWhereInput, ManagerWhereUniqueInput } from './where.args'

registerEnumType(Prisma.ManagerScalarFieldEnum, {
  name: 'ManagerScalarFieldEnum',
})

@ArgsType()
export class FindManyManagerArgs
  implements Required<Omit<Prisma.ManagerFindManyArgs, 'include' | 'select'>>
{
  @Field(() => ManagerWhereInput, { nullable: true })
  where: ManagerWhereInput
  @Field(() => [ManagerOrderByWithRelationInput], { nullable: true })
  orderBy: ManagerOrderByWithRelationInput[]
  @Field(() => ManagerWhereUniqueInput, { nullable: true })
  cursor: ManagerWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.ManagerScalarFieldEnum], { nullable: true })
  distinct: Prisma.ManagerScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueManagerArgs {
  @Field({ nullable: true })
  where: ManagerWhereUniqueInput
}
