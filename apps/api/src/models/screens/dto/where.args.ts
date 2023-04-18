import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter } from 'src/common/dtos/common.input'
import { CinemaRelationFilter } from 'src/models/cinemas/dto/where.args'
import { SeatListRelationFilter } from 'src/models/seats/dto/where.args'
import { ShowtimeListRelationFilter } from 'src/models/showtimes/dto/where.args'

@InputType()
export class ScreenWhereUniqueInput
  implements Required<Prisma.ScreenWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class ScreenWhereInput implements Required<Prisma.ScreenWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => IntFilter, { nullable: true })
  number: IntFilter
  @Field(() => IntFilter, { nullable: true })
  cinemaId: IntFilter
  @Field(() => CinemaRelationFilter, { nullable: true })
  cinema: CinemaRelationFilter
  @Field(() => ShowtimeListRelationFilter, { nullable: true })
  showtimes: ShowtimeListRelationFilter
  @Field(() => SeatListRelationFilter, { nullable: true })
  seats: SeatListRelationFilter

  @Field(() => [ScreenWhereInput], { nullable: true })
  AND: ScreenWhereInput[]
  @Field(() => [ScreenWhereInput], { nullable: true })
  OR: ScreenWhereInput[]
  @Field(() => [ScreenWhereInput], { nullable: true })
  NOT: ScreenWhereInput[]
}

@InputType()
export class ScreenListRelationFilter {
  @Field(() => ScreenWhereInput)
  every?: ScreenWhereInput
  @Field(() => ScreenWhereInput)
  some?: ScreenWhereInput
  @Field(() => ScreenWhereInput)
  none?: ScreenWhereInput
}

@InputType()
export class ScreenRelationFilter {
  @Field(() => ScreenWhereInput)
  is?: ScreenWhereInput
  @Field(() => ScreenWhereInput)
  isNot?: ScreenWhereInput
}
