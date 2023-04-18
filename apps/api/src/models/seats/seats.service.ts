import { Injectable } from '@nestjs/common'
import { FindManySeatArgs, FindUniqueSeatArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateSeatInput } from './dto/create-seat.input'
import { UpdateSeatInput } from './dto/update-seat.input'

@Injectable()
export class SeatsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSeatInput: CreateSeatInput) {
    return this.prisma.seat.create({
      data: createSeatInput,
    })
  }

  findAll(args: FindManySeatArgs) {
    return this.prisma.seat.findMany(args)
  }

  findOne(args: FindUniqueSeatArgs) {
    return this.prisma.seat.findUnique(args)
  }

  update(updateSeatInput: UpdateSeatInput) {
    const { id, ...data } = updateSeatInput
    return this.prisma.seat.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueSeatArgs) {
    return this.prisma.seat.delete(args)
  }
}
