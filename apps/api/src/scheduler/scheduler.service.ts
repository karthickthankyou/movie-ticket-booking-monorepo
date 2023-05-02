import { Injectable, Logger } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { startOfDay, endOfDay } from 'date-fns'
import { random, randomN } from 'prisma/seed/util'
import { randomInt } from 'crypto'

@Injectable()
export class SchedulerService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly logger = new Logger(SchedulerService.name)

  addTimeToTomorrow(timeString: Date) {
    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)
    const time = new Date(timeString)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(
      time.getUTCHours(),
      time.getUTCMinutes(),
      time.getUTCSeconds(),
    )
    return tomorrow.toISOString()
  }

  async handleCron() {
    //   Get screens with no shows.

    const date = new Date()
    date.setDate(date.getDate() + 2)
    const startOfDate = startOfDay(date)
    const endOfDate = endOfDay(date)

    const screens = await this.prisma.screen.findMany({
      where: {
        showtimes: {
          none: {
            startTime: {
              gte: startOfDate,
              lte: endOfDate,
            },
          },
        },
      },
      select: { id: true, cinemaId: true },
    })

    if (screens.length === 0) {
      return []
    }

    const cinemas = screens.reduce<{ [key: string]: number[] }>((acc, item) => {
      if (!acc[item.cinemaId]) {
        acc[item.cinemaId] = []
      }

      acc[item.cinemaId].push(item.id)

      return acc
    }, {})

    const movies = await this.prisma.movie.findMany()
    console.log('Schedules ', screens.length, movies.length)

    this.logger.debug('Called every day at 6 pm.', cinemas)

    const showtimes = []

    await Promise.all(
      Object.entries(cinemas).map(async ([cinemaId, screens]) => {
        const selectedMovies = randomN(movies, randomInt(1, 4))

        await screens.forEach(async (screenId) => {
          await Promise.all(
            [10, 14, 18, 22].map(async (hour) => {
              const startTime = new Date(startOfDate.setHours(hour))

              const movieId = random(selectedMovies).id

              const showtime = await this.prisma.showtime.create({
                data: { screenId, startTime, movieId },
              })
              showtimes.push(showtime)
            }),
          )
        })
      }),
    )

    return showtimes
  }
}
