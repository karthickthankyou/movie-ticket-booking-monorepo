import { InputType, PickType } from '@nestjs/graphql'
import { Movie } from '../entities/movie.entity'

@InputType()
export class CreateMovieInput extends PickType(
  Movie,
  ['director', 'duration', 'genre', 'posterUrl', 'releaseDate', 'title'],
  InputType,
) {}
