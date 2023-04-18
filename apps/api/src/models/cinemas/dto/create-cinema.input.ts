import { InputType, PickType } from '@nestjs/graphql'
import { Cinema } from '../entities/cinema.entity'

@InputType()
export class CreateCinemaInput extends PickType(Cinema, ['name'], InputType) {}
