import { Injectable } from '@nestjs/common'
import { FindManyBookingArgs, FindUniqueBookingArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBookingInput } from './dto/create-booking.input'
import { UpdateBookingInput } from './dto/update-booking.input'
import { UsersService } from '../users/users.service'

import { Prisma } from '@prisma/client'
import * as bwipjs from 'bwip-js'
import { FirebaseService } from 'src/common/firebase/firebase.service'

@Injectable()
export class BookingsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
    private readonly firebase: FirebaseService,
  ) {}

  async create(args: CreateBookingInput) {
    const bookingUser = await this.userService.createIfNotFound({
      // todo: Auth needs to be synded during registration. We create user with no display if user ends up here with no user entry.
      name: '',
      uid: args.userId,
    })

    const showtime = await this.prisma.showtime.findUnique({
      where: { id: args.showtimeId },
    })
    const bookingsData: Prisma.BookingCreateManyInput[] = args.seats.map(
      (seat) => ({
        row: seat.row,
        column: seat.column,
        screenId: showtime.screenId,
        showtimeId: args.showtimeId,
        userId: args.userId,
      }),
    )

    const ticket = await this.prisma.ticket.create({
      data: { uid: args.userId, bookings: { create: bookingsData } },
    })

    const png = await bwipjs.toBuffer({
      bcid: 'qrcode', // Barcode type
      text: JSON.stringify(ticket), // Text to encode
      textxalign: 'center', // Align the text to the center
    })

    const qrCode = await this.firebase.uploadFile2(png, args.userId, ticket.id)
    const updatedTicket = await this.prisma.ticket.update({
      where: { id: ticket.id },
      data: { qrCode },
    })

    return updatedTicket
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
