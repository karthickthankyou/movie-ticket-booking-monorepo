import { Injectable } from '@nestjs/common'
import { FindManyBookingArgs, FindUniqueBookingArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBookingInput } from './dto/create-booking.input'
import { UpdateBookingInput } from './dto/update-booking.input'

@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBookingInput: CreateBookingInput) {
    return this.prisma.booking.create({
      data: createBookingInput,
    })
  }

  findAll(args: FindManyBookingArgs) {
    return this.prisma.booking.findMany(args)
  }

  findOne(args: FindUniqueBookingArgs) {
    return this.prisma.booking.findUnique(args)
  }

  update(updateBookingInput: UpdateBookingInput) {
    const { id, ...data } = updateBookingInput
    return this.prisma.booking.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueBookingArgs) {
    return this.prisma.booking.delete(args)
  }
}
