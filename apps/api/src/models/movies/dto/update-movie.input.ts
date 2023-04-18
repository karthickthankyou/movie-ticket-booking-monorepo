import { CreateMovieInput } from './create-movie.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Movie } from '@prisma/client'

@InputType()
export class UpdateMovieInput extends PartialType(CreateMovieInput) {
  id: Movie['id']
}
