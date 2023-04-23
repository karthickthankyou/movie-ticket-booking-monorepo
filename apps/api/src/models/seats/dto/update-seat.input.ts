import { CreateSeatInput } from './create-seat.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { SeatScreenIdRowColumnCompoundUniqueInput } from './where.args'

@InputType()
export class UpdateSeatInput extends PartialType(CreateSeatInput) {
  @Field(() => SeatScreenIdRowColumnCompoundUniqueInput)
  screenId_row_column: SeatScreenIdRowColumnCompoundUniqueInput
}
