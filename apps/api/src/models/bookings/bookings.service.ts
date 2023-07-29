import { Injectable } from '@nestjs/common'
import { FindManyBookingArgs, FindUniqueBookingArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBookingInput } from './dto/create-booking.input'
import { UpdateBookingInput } from './dto/update-booking.input'
import { UsersService } from '../users/users.service'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/guards'
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

  async create(args: CreateBookingInput, user: GetUserType) {
    const bookingUser = await this.userService.create({
      name: user.displayName,
      uid: user.uid,
    })
    checkRowLevelPermission(user, args.userId)
    const bookingsData: Prisma.BookingCreateManyInput[] = args.seats.map(
      (seat) => ({
        row: seat.row,
        column: seat.column,
        screenId: args.screenId,
        showtimeId: args.showtimeId,
        userId: user.uid,
      }),
    )

    const ticket = await this.prisma.ticket.create({
      data: { uid: user.uid, bookings: { create: bookingsData } },
    })

    const png = await bwipjs.toBuffer({
      bcid: 'qrcode', // Barcode type
      text: JSON.stringify(ticket), // Text to encode
      textxalign: 'center', // Align the text to the center
    })

    const qrCode = await this.firebase.uploadFile2(png, user.uid, ticket.id)
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
