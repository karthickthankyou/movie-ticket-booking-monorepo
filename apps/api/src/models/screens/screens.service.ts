import { Injectable } from '@nestjs/common'
import { FindManyScreenArgs, FindUniqueScreenArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateScreenInput } from './dto/create-screen.input'
import { UpdateScreenInput } from './dto/update-screen.input'

@Injectable()
export class ScreensService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    cinemaId,
    projectionType,
    soundSystemType,
    columns,
    rows,
  }: CreateScreenInput) {
    const screenNumber = await this.prisma.screen.count({ where: { cinemaId } })

    const screen = await this.prisma.screen.create({
      data: {
        number: screenNumber + 1,
        cinemaId,
        projectionType,
        soundSystemType,
      },
    })

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
        const seat = await this.prisma.seat.create({
          data: { column: j, row: i, screenId: screen.id },
        })
      }
    }
  }

  findAll(args: FindManyScreenArgs) {
    return this.prisma.screen.findMany(args)
  }

  findOne(args: FindUniqueScreenArgs) {
    return this.prisma.screen.findUnique(args)
  }

  update(updateScreenInput: UpdateScreenInput) {
    const { id, ...data } = updateScreenInput
    return this.prisma.screen.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueScreenArgs) {
    return this.prisma.screen.delete(args)
  }
}
