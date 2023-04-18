import { InputType, PickType } from '@nestjs/graphql'
import { Address } from '../entities/address.entity'

@InputType()
export class CreateAddressInput extends PickType(
  Address,
  ['address', 'cinemaId', 'lat', 'lng'],
  InputType,
) {}
