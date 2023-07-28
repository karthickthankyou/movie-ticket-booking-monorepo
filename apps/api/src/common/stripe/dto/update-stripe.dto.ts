import { PartialType } from '@nestjs/mapped-types'
import { CreateStripeDto } from './create-stripe-session.dto'

export class UpdateStripeDto extends PartialType(CreateStripeDto) {}
