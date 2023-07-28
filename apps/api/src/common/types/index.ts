export type StripeItemType = {
  screenId: number
  showtimeId: number
  seats: { column: number; row: number; price: number }[]
}
