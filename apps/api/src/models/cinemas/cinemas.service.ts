import { Injectable } from '@nestjs/common'
import { FindManyCinemaArgs, FindUniqueCinemaArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCinemaInput } from './dto/create-cinema.input'
import { UpdateCinemaInput } from './dto/update-cinema.input'

@Injectable()
export class CinemasService {
  constructor(private readonly prisma: PrismaService) {}
  create({ manager, ...createCinemaInput }: CreateCinemaInput) {
    return this.prisma.cinema.create({
      data: { ...createCinemaInput, managers: { create: manager } },
    })
  }

  findAll(args: FindManyCinemaArgs) {
    return this.prisma.cinema.findMany(args)
  }

  findOne(args: FindUniqueCinemaArgs) {
    return this.prisma.cinema.findUnique(args)
  }

  update(updateCinemaInput: UpdateCinemaInput) {
    const { id, ...data } = updateCinemaInput
    return this.prisma.cinema.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueCinemaArgs) {
    return this.prisma.cinema.delete(args)
  }
}
