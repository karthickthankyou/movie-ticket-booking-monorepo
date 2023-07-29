export type StripeItemType = {
  screenId: number
  showtimeId: number
  seats: { column: number; row: number; price: number }[]
}

export type Role = 'admin' | 'manager'

export type GetUserType = {
  uid: string
  displayName: string
  email: string
  emailVerified: boolean
  phoneNumber: string
  roles: Role[]
}
