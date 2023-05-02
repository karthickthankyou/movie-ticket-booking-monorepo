import { Field, InputType } from '@nestjs/graphql'
import { ShowtimeStatus } from '@prisma/client'

@InputType()
export class UpdateShowtimeInput {
  @Field(() => Number)
  id: number
  @Field(() => ShowtimeStatus, { nullable: true })
  status: ShowtimeStatus
  @Field(() => Date, { nullable: true })
  startTime: Date
}
