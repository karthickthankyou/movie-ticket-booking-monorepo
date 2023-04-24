import { GetUserType, Role } from '@showtime-org/types'
import { Injectable } from '@nestjs/common'
import * as admin from 'firebase-admin'
import { createReadStream } from 'fs'
import { Readable } from 'stream'

@Injectable()
export class FirebaseService {
  private firebaseApp: admin.app.App

  constructor() {
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.firebaseClientEmail,
        privateKey: process.env.firebasePrivateKey,
        projectId: process.env.firebaseProjectId,
      }),
      storageBucket: process.env.firebaseStorageBucket,
    })
  }

  getAuth = (): admin.auth.Auth => {
    return this.firebaseApp.auth()
  }
  getStorage = () => {
    return this.firebaseApp.storage()
  }

  async uploadFile(file): Promise<string> {
    const bucket = this.getStorage().bucket()

    const [newfile] = await bucket.upload(file, {
      // Support for HTTP requests made with `Accept-Encoding: gzip`
      gzip: true,
    })
    return newfile.name
  }

  async uploadFile2(
    buffer: Buffer,
    uid: string,
    ticketId: number,
  ): Promise<string> {
    const bucket = this.getStorage().bucket()
    const fileName = `tickets/${uid}/${ticketId}.png`
    const file = bucket.file(fileName)
    const contentType = 'image/png'

    await new Promise((resolve, reject) => {
      const writeStream = file.createWriteStream({
        metadata: {
          contentType,
        },
      })

      writeStream.on('error', (error) => {
        reject(error)
      })

      writeStream.on('finish', () => {
        resolve(null)
      })

      const bufferStream = new Readable({
        read() {
          this.push(buffer)
          this.push(null)
        },
      })
      bufferStream.pipe(writeStream)
    })

    return fileName
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
