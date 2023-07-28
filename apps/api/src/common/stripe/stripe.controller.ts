import { Controller, Post, Body, Get, Query, Res } from '@nestjs/common'
import { CreateStripeDto } from './dto/create-stripe-session.dto'
import StripeService from './stripe.service'

import { PrismaService } from '../prisma/prisma.service'

import { Response } from 'express'
import { BookingsService } from 'src/models/bookings/bookings.service'

@Controller('stripe')
export class StripeController {
  constructor(
    private readonly stripeService: StripeService,
    private readonly prisma: PrismaService,
    private readonly bookingsService: BookingsService,
  ) {}

  @Post()
  create(@Body() createStripeDto: CreateStripeDto) {
    return this.stripeService.createStripeSession(createStripeDto)
  }

  @Get('success')
  async handleStripeSuccess(
    @Query('session_id') sessionId: string,
    @Res() res: Response,
  ) {
    const session = await this.stripeService.stripe.checkout.sessions.retrieve(
      sessionId,
    )

    const { uid, bookingInfo } = session.metadata
    console.log('session.metadata', session.metadata)
    const { screenId, seats, showtimeId } = JSON.parse(bookingInfo)
    console.log('screenId, seats, showtimeId', screenId, seats, showtimeId)

    const booking = await this.bookingsService.create(
      {
        screenId: +screenId,
        seats: seats,
        showtimeId: +showtimeId,
        userId: uid,
      },
      {
        displayName: '',
        email: '',
        emailVerified: false,
        phoneNumber: '',
        roles: [],
        uid: uid,
      },
    )

    console.log(
      'process.env.PAYMENT_SUCCESS_REDIRECT_URL',
      process.env.PAYMENT_SUCCESS_REDIRECT_URL,
    )
    res.redirect(process.env.PAYMENT_SUCCESS_REDIRECT_URL)
  }
}
