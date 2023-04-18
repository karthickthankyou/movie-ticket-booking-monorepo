import { Injectable } from '@nestjs/common'
import { FindManyScreenArgs, FindUniqueScreenArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateScreenInput } from './dto/create-screen.input'
import { UpdateScreenInput } from './dto/update-screen.input'

@Injectable()
export class ScreensService {
  constructor(private readonly prisma: PrismaService) {}
  create(createScreenInput: CreateScreenInput) {
    return this.prisma.screen.create({
      data: createScreenInput,
    })
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
