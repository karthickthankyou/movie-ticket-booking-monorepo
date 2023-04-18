import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BookingOrderByWithRelationInput } from './orderBy.args'
import { BookingWhereInput, BookingWhereUniqueInput } from './where.args'

registerEnumType(Prisma.BookingScalarFieldEnum, {
  name: 'BookingScalarFieldEnum',
})

@ArgsType()
export class FindManyBookingArgs
  implements Required<Omit<Prisma.BookingFindManyArgs, 'include' | 'select'>>
{
  @Field(() => BookingWhereInput, { nullable: true })
  where: BookingWhereInput
  @Field(() => [BookingOrderByWithRelationInput], { nullable: true })
  orderBy: BookingOrderByWithRelationInput[]
  @Field(() => BookingWhereUniqueInput, { nullable: true })
  cursor: BookingWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.BookingScalarFieldEnum], { nullable: true })
  distinct: Prisma.BookingScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueBookingArgs {
  @Field({ nullable: true })
  where: BookingWhereUniqueInput
}
