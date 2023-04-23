import { Field, InputType, registerEnumType } from '@nestjs/graphql'
import { Genre, Prisma } from '@prisma/client'
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

registerEnumType(Genre, { name: 'Genre', description: 'Enum for roles' })

@InputType()
export class EnumGenreFilter {
  @Field(() => Genre, { nullable: true })
  equals?: Genre;
  @Field(() => [Genre], { nullable: true })
  in?: Genre[]
  @Field(() => [Genre], { nullable: true })
  notIn?: Genre[]
  @Field(() => Genre, { nullable: true })
  not?: Genre
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
  @Field(() => EnumGenreFilter, { nullable: true })
  genre: EnumGenreFilter
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
  @Field(() => MovieWhereInput, { nullable: true })
  every?: MovieWhereInput
  @Field(() => MovieWhereInput, { nullable: true })
  some?: MovieWhereInput
  @Field(() => MovieWhereInput, { nullable: true })
  none?: MovieWhereInput
}

@InputType()
export class MovieRelationFilter {
  @Field(() => MovieWhereInput, { nullable: true })
  is?: MovieWhereInput
  @Field(() => MovieWhereInput, { nullable: true })
  isNot?: MovieWhereInput
}
