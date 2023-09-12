import { Injectable } from '@nestjs/common'
import { FindManyCinemaArgs, FindUniqueCinemaArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCinemaInput } from './dto/create-cinema.input'
import { UpdateCinemaInput } from './dto/update-cinema.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class CinemasService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    manager,
    address,
    screens,
    ...createCinemaInput
  }: CreateCinemaInput) {
    const screensWithSeats = screens.map((screen, index) => {
      const { rows, columns, ...screenData } = screen
      const seats = []

      for (let row = 1; row <= rows; row++) {
        for (let column = 1; column <= columns; column++) {
          seats.push({ row, column })
        }
      }

      return {
        ...screenData,
        seats: { create: seats },
        number: index,
      }
    })

    const existingManager = await this.prisma.manager.findUnique({
      where: { uid: manager.uid },
    })

    return this.prisma.cinema.create({
      data: {
        ...createCinemaInput,
        ...(existingManager?.uid
          ? { managers: { connect: { uid: manager.uid } } }
          : { managers: { create: manager } }),
        address: { create: address },
        screens: { create: screensWithSeats },
      },
    })
  }

  findAll(args: FindManyCinemaArgs) {
    return this.prisma.cinema.findMany(args)
  }

  findOne(args: FindUniqueCinemaArgs) {
    return this.prisma.cinema.findUnique(args)
  }

  findByManager(uid: string) {
    return this.prisma.cinema.findFirst({
      where: { managers: { some: { uid } } },
    })
  }

  update(updateCinemaInput: UpdateCinemaInput) {
    const { id, screens, address, ...data } = updateCinemaInput
    return this.prisma.cinema.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueCinemaArgs) {
    return this.prisma.cinema.delete(args)
  }
}
