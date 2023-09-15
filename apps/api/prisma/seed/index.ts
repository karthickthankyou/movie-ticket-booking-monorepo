import { Prisma, PrismaClient } from '@prisma/client'
import { admins, managers, users } from './data/users'
import { FirebaseService } from '../../src/common/firebase/firebase.service'
import { random, setFirebaseRole } from './util'
import { cinemas } from './data/cinemas'
import { randomInt } from 'crypto'
import { movies } from './data/movies'

const prisma = new PrismaClient()
const firebaseService = new FirebaseService()

const deleteAll = async () => {
  await prisma.ticket.deleteMany()
  await prisma.booking.deleteMany()

  await prisma.showtime.deleteMany()
  await prisma.movie.deleteMany()
  await prisma.seat.deleteMany()
  await prisma.screen.deleteMany()
  await prisma.address.deleteMany()
  await prisma.cinema.deleteMany()
  //   Users
  await prisma.admin.deleteMany()
  await prisma.manager.deleteMany()
  await prisma.user.deleteMany()
}

const deleteShowtimes = async () => {
  await prisma.showtime.deleteMany()
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

const seedCinemas = async () => {
  for (const { address, location, name, screens } of cinemas) {
    console.log('data', name)
    const managers = await prisma.manager.findMany()

    const newScreens: Prisma.ScreenCreateWithoutCinemaInput[] = Array(screens)
      .fill({})
      .map((item, index) => {
        const row = randomInt(4, 6)
        const column = randomInt(6, 10)
        const seats = []

        for (let rowIndex = 1; rowIndex <= row; rowIndex++) {
          for (let columnIndex = 1; columnIndex <= column; columnIndex++) {
            seats.push({ row: rowIndex, column: columnIndex })
          }
        }
        return { number: index + 1, seats: { create: seats } }
      })

    const newCinema = await prisma.cinema.create({
      data: {
        name,
        address: {
          create: { address, lat: location.lat, lng: location.lng },
        },
        managers: {
          connect: { uid: random(managers).uid },
        },
        screens: {
          create: newScreens,
        },
      },
    })
  }
}

const seedMovies = async () => {
  for (const movie of movies) {
    const newMovie = await prisma.movie.create({
      data: movie,
    })
  }
}

const main = async () => {
  await deleteAll()
  //   await seedUsers()
  //   await seedCinemas()
  // //   await deleteShowtimes()
  //   await seedMovies()
}

main()
