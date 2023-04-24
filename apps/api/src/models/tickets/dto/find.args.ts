import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { TicketOrderByWithRelationInput } from './orderBy.args'
import { TicketWhereInput, TicketWhereUniqueInput } from './where.args'

registerEnumType(Prisma.TicketScalarFieldEnum, {
  name: 'TicketScalarFieldEnum',
})

@ArgsType()
export class FindManyTicketArgs
  implements Required<Omit<Prisma.TicketFindManyArgs, 'include' | 'select'>>
{
  @Field(() => TicketWhereInput, { nullable: true })
  where: TicketWhereInput
  @Field(() => [TicketOrderByWithRelationInput], { nullable: true })
  orderBy: TicketOrderByWithRelationInput[]
  @Field(() => TicketWhereUniqueInput, { nullable: true })
  cursor: TicketWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.TicketScalarFieldEnum], { nullable: true })
  distinct: Prisma.TicketScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueTicketArgs {
  @Field({ nullable: true })
  where: TicketWhereUniqueInput
}
