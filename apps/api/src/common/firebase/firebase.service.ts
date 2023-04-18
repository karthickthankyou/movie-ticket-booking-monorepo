import { GetUserType, Role } from '@booking-org/types'
import { Injectable } from '@nestjs/common'
import * as admin from 'firebase-admin'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class FirebaseService {
  private firebaseApp: admin.app.App

  constructor(private readonly prisma: PrismaService) {
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.firebaseClientEmail,
        privateKey: process.env.firebasePrivateKey,
        projectId: process.env.firebaseProjectId,
      }),
    })
  }

  getAuth = (): admin.auth.Auth => {
    return this.firebaseApp.auth()
  }
  async setRole(user: GetUserType, role: Role) {
    const existingroles = user?.roles || []
    if (existingroles.includes(role)) {
      //   throw new BadRequestException(`User already has this role. ${role}`)
      console.error(`User already has this role. ${role}`)
      return
    }

    const updatedRoles = [...existingroles, role]

    await this.firebaseApp
      .auth()
      .setCustomUserClaims(user.uid, {
        roles: updatedRoles,
      })
      .then((res) => {
        console.log(`Successfully set ${JSON.stringify(res)}`)
      })

    return
  }
}
