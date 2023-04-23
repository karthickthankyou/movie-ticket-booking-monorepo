import { PrismaClient } from '@prisma/client'
import { admins, managers, users } from './data/users'
import { FirebaseService } from '../../src/common/firebase/firebase.service'
import { setFirebaseRole } from './util'

const prisma = new PrismaClient()
const firebaseService = new FirebaseService()

const deleteAll = async () => {
  await prisma.booking.deleteMany()

  await prisma.showtime.deleteMany()
  await prisma.movie.deleteMany()
  await prisma.seat.deleteMany()
  await prisma.screen.deleteMany()
  await prisma.address.deleteMany()
  await prisma.cinema.deleteMany()
  //   Users
  await prisma.manager.deleteMany()
  await prisma.user.deleteMany()
}

const seedUsers = async () => {
  for (const userData of users) {
    const user = await prisma.user.create({ data: userData })
  }
  for (const userData of managers) {
    const manager = await prisma.manager.create({ data: userData })
    setFirebaseRole({ firebaseService, uid: manager.uid, roles: ['manager'] })
  }
  for (const userData of admins) {
    const admin = await prisma.user.create({ data: userData })
    setFirebaseRole({
      firebaseService,
      uid: admin.uid,
      roles: ['admin'],
    })
  }
}

const main = async () => {
  await deleteAll()

  await seedUsers()
}

main()
