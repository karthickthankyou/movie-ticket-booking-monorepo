import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, StringFilter } from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/models/bookings/dto/where.args'

@InputType()
export class UserWhereUniqueInput
  implements Required<Prisma.UserWhereUniqueInput>
{
  @Field(() => String, { nullable: true })
  uid: string
}

@InputType()
export class UserWhereInput implements Required<Prisma.UserWhereInput> {
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter
  @Field(() => BookingListRelationFilter, { nullable: true })
  bookings: BookingListRelationFilter

  @Field(() => [UserWhereInput], { nullable: true })
  AND: UserWhereInput[]
  @Field(() => [UserWhereInput], { nullable: true })
  OR: UserWhereInput[]
  @Field(() => [UserWhereInput], { nullable: true })
  NOT: UserWhereInput[]
}

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput)
  every?: UserWhereInput
  @Field(() => UserWhereInput)
  some?: UserWhereInput
  @Field(() => UserWhereInput)
  none?: UserWhereInput
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput)
  is?: UserWhereInput
  @Field(() => UserWhereInput)
  isNot?: UserWhereInput
}
