import axios from 'axios'

import { BadRequestException, Injectable } from '@nestjs/common'

import {
  LoginInput,
  LoginOutput,
  RefreshTokenInput,
  RefreshTokenOutput,
  RegisterInput,
  RegisterOutput,
} from './dto/auth.input'

import { GetUserType, Role } from '@showtime-org/types'
import { FirebaseService } from 'src/common/firebase/firebase.service'

@Injectable()
export class AuthService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async login(args: LoginInput) {
    const { email, password } = args

    console.log('Some one ', process.env.firebaseAPIKey)

    try {
      const firebaseUser = await axios.post<LoginOutput>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.firebaseAPIKey}`,
        { email, password, returnSecureToken: true },
      )
      console.log('Login Data ', firebaseUser)

      return firebaseUser.data
    } catch (err) {
      throw new BadRequestException(err.response.data.error.message)
    }
  }

  async refreshToken(args: RefreshTokenInput) {
    const { refresh_token } = args
    try {
      const firebaseUser = await axios.post<RefreshTokenOutput>(
        `https://securetoken.googleapis.com/v1/token?key=${process.env.firebaseAPIKey}`,
        { grant_type: 'refresh_token', refresh_token, returnSecureToken: true },
      )
      console.log('Refresh token Data ', firebaseUser)
      return firebaseUser.data
    } catch (err) {
      throw new BadRequestException(err.response.data.error.message)
    }
  }

  async register(args: RegisterInput): Promise<RegisterOutput> {
    const { email, password, displayName } = args

    console.log('firebase api key: ', process.env.firebaseAPIKey)
    try {
      const firebaseUser = await axios.post<RegisterOutput>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseAPIKey}`,
        { email, password, displayName, returnSecureToken: true },
      )

      return firebaseUser.data
    } catch (err) {
      console.log('Err', err.response.data.error.message)
      throw new BadRequestException(err.response.data.error.message)
    }
  }

  async setRole(user: GetUserType, role: Role): Promise<boolean> {
    const existingRoles = user.roles || []
    if (existingRoles.includes(role)) {
      //   throw new BadRequestException(`User already has this role. ${role}`)
      console.error(`User already has this role. ${role}`)
      return false
    }

    const updatedRoles = [...existingRoles, role]

    await this.firebaseService
      .getAuth()
      .setCustomUserClaims(user.uid, {
        roles: updatedRoles,
      })
      .then((res) => {
        console.log(`Successfully set ${JSON.stringify(res)}`)
      })

    return true
  }

  async removeRole(uid: string, role: Role, existingRoles: Role[]) {
    if (!existingRoles.includes(role)) {
      throw new BadRequestException(`User does not have this role. ${role}`)
    }

    const updatedRoles = existingRoles.filter((r) => r !== role)

    await this.firebaseService
      .getAuth()
      .setCustomUserClaims(uid, {
        roles: updatedRoles,
      })
      .then((res) => {
        console.log(`Successfully set ${JSON.stringify(res)}`)
      })

    return { success: true }
  }
}
