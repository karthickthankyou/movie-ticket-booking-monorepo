import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ShowtimeListRelationFilter } from 'src/models/showtimes/dto/where.args'

@InputType()
export class MovieWhereUniqueInput
  implements Required<Prisma.MovieWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class MovieWhereInput implements Required<Prisma.MovieWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  title: StringFilter
  @Field(() => StringFilter, { nullable: true })
  director: StringFilter
  @Field(() => StringFilter, { nullable: true })
  genre: StringFilter
  @Field(() => IntFilter, { nullable: true })
  duration: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  releaseDate: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  posterUrl: StringFilter
  @Field(() => ShowtimeListRelationFilter, { nullable: true })
  showtimes: ShowtimeListRelationFilter

  @Field(() => [MovieWhereInput], { nullable: true })
  AND: MovieWhereInput[]
  @Field(() => [MovieWhereInput], { nullable: true })
  OR: MovieWhereInput[]
  @Field(() => [MovieWhereInput], { nullable: true })
  NOT: MovieWhereInput[]
}

@InputType()
export class MovieListRelationFilter {
  @Field(() => MovieWhereInput)
  every?: MovieWhereInput
  @Field(() => MovieWhereInput)
  some?: MovieWhereInput
  @Field(() => MovieWhereInput)
  none?: MovieWhereInput
}

@InputType()
export class MovieRelationFilter {
  @Field(() => MovieWhereInput)
  is?: MovieWhereInput
  @Field(() => MovieWhereInput)
  isNot?: MovieWhereInput
}
