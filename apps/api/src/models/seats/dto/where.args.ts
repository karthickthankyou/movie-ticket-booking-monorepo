import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter } from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/models/bookings/dto/where.args'
import { ScreenRelationFilter } from 'src/models/screens/dto/where.args'

@InputType()
export class SeatWhereUniqueInput
  implements Required<Prisma.SeatWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class SeatWhereInput implements Required<Prisma.SeatWhereInput> {
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => IntFilter, { nullable: true })
  row: IntFilter
  @Field(() => IntFilter, { nullable: true })
  column: IntFilter
  @Field(() => IntFilter, { nullable: true })
  screenId: IntFilter
  @Field(() => ScreenRelationFilter, { nullable: true })
  screen: ScreenRelationFilter
  @Field(() => BookingListRelationFilter, { nullable: true })
  bookings: BookingListRelationFilter
  // @Field(() => StringFilter, { nullable: true })
  // uid: StringFilter

  @Field(() => [SeatWhereInput], { nullable: true })
  AND: SeatWhereInput[]
  @Field(() => [SeatWhereInput], { nullable: true })
  OR: SeatWhereInput[]
  @Field(() => [SeatWhereInput], { nullable: true })
  NOT: SeatWhereInput[]
}

@InputType()
export class SeatListRelationFilter {
  @Field(() => SeatWhereInput)
  every?: SeatWhereInput
  @Field(() => SeatWhereInput)
  some?: SeatWhereInput
  @Field(() => SeatWhereInput)
  none?: SeatWhereInput
}

@InputType()
export class SeatRelationFilter {
  @Field(() => SeatWhereInput)
  is?: SeatWhereInput
  @Field(() => SeatWhereInput)
  isNot?: SeatWhereInput
}
