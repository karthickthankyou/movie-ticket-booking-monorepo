import { CreateUserInput } from '../generated/graphql'

export const allUsers: CreateUserInput[] = [
  {
    uid: 'aRt5HIo04aYSId5HUxtchlvk5im1',
    name: 'User 1',
  },
  {
    uid: 'DHQVyAP3cehFWnYcUaRr5aafcG93',
    name: 'User 2',
  },
  {
    uid: 'QhBKGJI34yTqiYtV5gi6jefe4cj1',
    name: 'Manager 1',
  },
  {
    uid: 'ScrwY34t14SEU5N3SbPWMA2Ac3z2',
    name: 'Manager 2',
  },
  {
    uid: 'zYpx0n5vPbaMnSz9mbhpdV56oE83',
    name: 'Admin 1',
  },
  {
    uid: 'sgMnM2v6lNSZA9VG0J3hoD8MRzC3',
    name: 'Admin 2',
  },
]

export const users = allUsers.filter((user) => user.name.includes('User'))
export const managers = allUsers.filter((user) => user.name.includes('Manager'))
export const admins = allUsers.filter((user) => user.name.includes('Admin'))
