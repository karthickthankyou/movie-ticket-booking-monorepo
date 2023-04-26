import { Field, ObjectType } from '@nestjs/graphql'
import { Showtime as ShowtimeType } from '@prisma/client'
import { Screen } from '../../screens/entities/screen.entity'

@ObjectType()
export class Showtime implements ShowtimeType {
  id: number
  createdAt: Date
  updatedAt: Date
  startTime: Date
  movieId: number
  screenId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}

@ObjectType()
export class RemainingSeats {
  total: number
  booked: number
}

@ObjectType()
export class ShowtimeSimple {
  id: number
  startTime: string
  movieId: number
  @Field(() => Screen)
  screen: Screen

  @Field(() => RemainingSeats)
  remainingSeats: RemainingSeats
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}

@ObjectType()
export class GroupedShowtime {
  date: string
  @Field(() => [ShowtimeSimple])
  showtimes: ShowtimeSimple[]
}
