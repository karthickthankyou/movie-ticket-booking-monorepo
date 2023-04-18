import { ObjectType } from '@nestjs/graphql'
import { Movie as MovieType } from '@prisma/client'

@ObjectType()
export class Movie implements MovieType {
  id: number
  createdAt: Date
  updatedAt: Date
  title: string
  director: string
  genre: string
  duration: number
  releaseDate: Date
  posterUrl: string
}
