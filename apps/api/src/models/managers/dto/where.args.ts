import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import {
  CinemaListRelationFilter,
  CinemaRelationFilter,
} from 'src/models/cinemas/dto/where.args'

@InputType()
export class ManagerWhereUniqueInput
  implements Required<Prisma.ManagerWhereUniqueInput>
{
  @Field(() => String, { nullable: true })
  uid: string
}

@InputType()
export class ManagerWhereInput implements Required<Prisma.ManagerWhereInput> {
  @Field(() => CinemaListRelationFilter, { nullable: true })
  cinema: CinemaListRelationFilter
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter

  @Field(() => [ManagerWhereInput], { nullable: true })
  AND: ManagerWhereInput[]
  @Field(() => [ManagerWhereInput], { nullable: true })
  OR: ManagerWhereInput[]
  @Field(() => [ManagerWhereInput], { nullable: true })
  NOT: ManagerWhereInput[]
}

@InputType()
export class ManagerListRelationFilter {
  @Field(() => ManagerWhereInput)
  every?: ManagerWhereInput
  @Field(() => ManagerWhereInput)
  some?: ManagerWhereInput
  @Field(() => ManagerWhereInput)
  none?: ManagerWhereInput
}

@InputType()
export class ManagerRelationFilter {
  @Field(() => ManagerWhereInput)
  is?: ManagerWhereInput
  @Field(() => ManagerWhereInput)
  isNot?: ManagerWhereInput
}
