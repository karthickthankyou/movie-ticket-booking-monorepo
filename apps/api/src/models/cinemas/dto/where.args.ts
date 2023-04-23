import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AddressRelationFilter } from 'src/models/addresses/dto/where.args'
import { ManagerListRelationFilter } from 'src/models/managers/dto/where.args'
import { ScreenListRelationFilter } from 'src/models/screens/dto/where.args'

@InputType()
export class CinemaWhereUniqueInput
  implements Required<Prisma.CinemaWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class CinemaWhereInput implements Required<Prisma.CinemaWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter
  @Field(() => ScreenListRelationFilter, { nullable: true })
  screens: ScreenListRelationFilter
  @Field(() => ManagerListRelationFilter, { nullable: true })
  managers: ManagerListRelationFilter
  @Field(() => AddressRelationFilter, { nullable: true })
  address: AddressRelationFilter

  @Field(() => [CinemaWhereInput], { nullable: true })
  AND: CinemaWhereInput[]
  @Field(() => [CinemaWhereInput], { nullable: true })
  OR: CinemaWhereInput[]
  @Field(() => [CinemaWhereInput], { nullable: true })
  NOT: CinemaWhereInput[]
}

@InputType()
export class CinemaListRelationFilter {
  @Field(() => CinemaWhereInput)
  every?: CinemaWhereInput
  @Field(() => CinemaWhereInput)
  some?: CinemaWhereInput
  @Field(() => CinemaWhereInput)
  none?: CinemaWhereInput
}

@InputType()
export class CinemaRelationFilter {
  @Field(() => CinemaWhereInput)
  is?: CinemaWhereInput
  @Field(() => CinemaWhereInput)
  isNot?: CinemaWhereInput
}
