import { ObjectType } from '@nestjs/graphql'
import { Showtime as ShowtimeType } from '@prisma/client'

@ObjectType()
export class Showtime implements ShowtimeType {
  id: number
  createdAt: Date
  updatedAt: Date
  startTime: Date
  endTime: Date
  movieId: number
  screenId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
