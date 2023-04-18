import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter } from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/models/bookings/dto/where.args'
import { MovieRelationFilter } from 'src/models/movies/dto/where.args'
import { ScreenRelationFilter } from 'src/models/screens/dto/where.args'

@InputType()
export class ShowtimeWhereUniqueInput
  implements Required<Prisma.ShowtimeWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class ShowtimeWhereInput implements Required<Prisma.ShowtimeWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  startTime: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  endTime: DateTimeFilter
  @Field(() => IntFilter, { nullable: true })
  movieId: IntFilter
  @Field(() => IntFilter, { nullable: true })
  screenId: IntFilter
  @Field(() => MovieRelationFilter, { nullable: true })
  movie: MovieRelationFilter
  @Field(() => ScreenRelationFilter, { nullable: true })
  screen: ScreenRelationFilter
  @Field(() => BookingListRelationFilter, { nullable: true })
  bookings: BookingListRelationFilter
  // @Field(() => StringFilter, { nullable: true })
  // uid: StringFilter

  @Field(() => [ShowtimeWhereInput], { nullable: true })
  AND: ShowtimeWhereInput[]
  @Field(() => [ShowtimeWhereInput], { nullable: true })
  OR: ShowtimeWhereInput[]
  @Field(() => [ShowtimeWhereInput], { nullable: true })
  NOT: ShowtimeWhereInput[]
}

@InputType()
export class ShowtimeListRelationFilter {
  @Field(() => ShowtimeWhereInput)
  every?: ShowtimeWhereInput
  @Field(() => ShowtimeWhereInput)
  some?: ShowtimeWhereInput
  @Field(() => ShowtimeWhereInput)
  none?: ShowtimeWhereInput
}

@InputType()
export class ShowtimeRelationFilter {
  @Field(() => ShowtimeWhereInput)
  is?: ShowtimeWhereInput
  @Field(() => ShowtimeWhereInput)
  isNot?: ShowtimeWhereInput
}
