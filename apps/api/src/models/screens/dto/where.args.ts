import { Field, InputType } from '@nestjs/graphql'
import { Prisma, ProjectionType, SoundSystemType } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
} from 'src/common/dtos/common.input'
import { CinemaRelationFilter } from 'src/models/cinemas/dto/where.args'
import { SeatListRelationFilter } from 'src/models/seats/dto/where.args'
import { ShowtimeListRelationFilter } from 'src/models/showtimes/dto/where.args'

//  implements Required<Prisma.ScreenWhereUniqueInput>
@InputType()
export class ScreenWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class EnumSoundSystemTypeFilter {
  @Field(() => SoundSystemType, { nullable: true })
  equals?: SoundSystemType;
  @Field(() => [SoundSystemType], { nullable: true })
  in?: SoundSystemType[]
  @Field(() => [SoundSystemType], { nullable: true })
  notIn?: SoundSystemType[]
  @Field(() => SoundSystemType, { nullable: true })
  not?: SoundSystemType
}
@InputType()
export class EnumProjectionTypeFilter {
  @Field(() => ProjectionType, { nullable: true })
  equals?: ProjectionType;
  @Field(() => [ProjectionType], { nullable: true })
  in?: ProjectionType[]
  @Field(() => [ProjectionType], { nullable: true })
  notIn?: ProjectionType[]
  @Field(() => ProjectionType, { nullable: true })
  not?: ProjectionType
}

@InputType()
export class ScreenWhereInput implements Required<Prisma.ScreenWhereInput> {
  @Field(() => EnumProjectionTypeFilter, { nullable: true })
  projectionType: EnumProjectionTypeFilter
  @Field(() => EnumSoundSystemTypeFilter, { nullable: true })
  soundSystemType: EnumSoundSystemTypeFilter
  @Field(() => FloatFilter, { nullable: true })
  price: FloatFilter

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
