import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { SeatRelationFilter } from 'src/models/seats/dto/where.args'
import { ShowtimeRelationFilter } from 'src/models/showtimes/dto/where.args'
import { UserRelationFilter } from 'src/models/users/dto/where.args'

@InputType()
export class BookingWhereUniqueInput
  implements Required<Prisma.BookingWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class BookingWhereInput implements Required<Prisma.BookingWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  userId: StringFilter
  @Field(() => IntFilter, { nullable: true })
  showtimeId: IntFilter
  @Field(() => IntFilter, { nullable: true })
  seatId: IntFilter
  @Field(() => UserRelationFilter, { nullable: true })
  user: UserRelationFilter
  @Field(() => ShowtimeRelationFilter, { nullable: true })
  showtime: ShowtimeRelationFilter
  @Field(() => SeatRelationFilter, { nullable: true })
  seat: SeatRelationFilter

  @Field(() => [BookingWhereInput], { nullable: true })
  AND: BookingWhereInput[]
  @Field(() => [BookingWhereInput], { nullable: true })
  OR: BookingWhereInput[]
  @Field(() => [BookingWhereInput], { nullable: true })
  NOT: BookingWhereInput[]
}

@InputType()
export class BookingListRelationFilter {
  @Field(() => BookingWhereInput)
  every?: BookingWhereInput
  @Field(() => BookingWhereInput)
  some?: BookingWhereInput
  @Field(() => BookingWhereInput)
  none?: BookingWhereInput
}

@InputType()
export class BookingRelationFilter {
  @Field(() => BookingWhereInput)
  is?: BookingWhereInput
  @Field(() => BookingWhereInput)
  isNot?: BookingWhereInput
}
