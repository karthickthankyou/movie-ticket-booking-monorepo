import { StripeItemType } from '../../types'

export class CreateStripeDto {
  uid: string
  bookingInfo: StripeItemType
}
