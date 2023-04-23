import { Field, ObjectType } from '@nestjs/graphql'
import { Genre, Movie as MovieType } from '@prisma/client'

@ObjectType()
export class Movie implements MovieType {
  id: number
  createdAt: Date
  updatedAt: Date
  title: string
  director: string
  @Field(() => Genre)
  genre: Genre
  duration: number
  releaseDate: Date
  posterUrl: string
}
