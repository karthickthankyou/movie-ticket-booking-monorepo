import { Injectable } from '@nestjs/common'
import Stripe from 'stripe'
import { CreateStripeDto } from './dto/create-stripe-session.dto'

import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export default class StripeService {
  public stripe: Stripe

  constructor(private readonly prisma: PrismaService) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2022-11-15',
    })
  }

  async createStripeSession({ bookingInfo, uid }: CreateStripeDto) {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: bookingInfo.seats
        .filter(({ price }) => price > 0)
        .map(({ column, row, price }) => ({
          quantity: 1,
          price_data: {
            product_data: {
              name: `${row} - ${column}`,
            },
            currency: 'inr',
            unit_amount: price * 100,
          },
        })),
      mode: 'payment',
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
      metadata: {
        uid,
        bookingInfo: JSON.stringify(bookingInfo),
      },
    })

    return { sessionId: session.id }
  }
}
