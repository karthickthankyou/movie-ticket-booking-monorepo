import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SeatOrderByWithRelationInput } from './orderBy.args'
import { SeatWhereInput, SeatWhereUniqueInput } from './where.args'

registerEnumType(Prisma.SeatScalarFieldEnum, {
  name: 'SeatScalarFieldEnum',
})

@ArgsType()
export class FindManySeatArgs
  implements Required<Omit<Prisma.SeatFindManyArgs, 'include' | 'select'>>
{
  @Field(() => SeatWhereInput, { nullable: true })
  where: SeatWhereInput
  @Field(() => [SeatOrderByWithRelationInput], { nullable: true })
  orderBy: SeatOrderByWithRelationInput[]
  @Field(() => SeatWhereUniqueInput, { nullable: true })
  cursor: SeatWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.SeatScalarFieldEnum], { nullable: true })
  distinct: Prisma.SeatScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueSeatArgs {
  @Field({ nullable: true })
  where: SeatWhereUniqueInput
}
