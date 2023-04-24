import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/models/bookings/dto/where.args'
import { UserRelationFilter } from 'src/models/users/dto/where.args'

@InputType()
export class TicketWhereUniqueInput
  implements Required<Prisma.TicketWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class TicketWhereInput implements Required<Prisma.TicketWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => StringFilter, { nullable: true })
  qrCode: StringFilter
  @Field(() => UserRelationFilter, { nullable: true })
  user: UserRelationFilter
  @Field(() => BookingListRelationFilter, { nullable: true })
  bookings: BookingListRelationFilter

  // @Field(() => StringFilter, { nullable: true })
  // uid: StringFilter

  @Field(() => [TicketWhereInput], { nullable: true })
  AND: TicketWhereInput[]
  @Field(() => [TicketWhereInput], { nullable: true })
  OR: TicketWhereInput[]
  @Field(() => [TicketWhereInput], { nullable: true })
  NOT: TicketWhereInput[]
}

@InputType()
export class TicketListRelationFilter {
  @Field(() => TicketWhereInput)
  every?: TicketWhereInput
  @Field(() => TicketWhereInput)
  some?: TicketWhereInput
  @Field(() => TicketWhereInput)
  none?: TicketWhereInput
}

@InputType()
export class TicketRelationFilter {
  @Field(() => TicketWhereInput)
  is?: TicketWhereInput
  @Field(() => TicketWhereInput)
  isNot?: TicketWhereInput
}
