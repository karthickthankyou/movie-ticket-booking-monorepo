import { BadRequestException } from '@nestjs/common'
import { Resolver, Mutation, Args } from '@nestjs/graphql'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType, Role } from '@booking-org/types'

import { AuthService } from './auth.service'

import {
  LoginInput,
  LoginOutput,
  RefreshTokenInput,
  RefreshTokenOutput,
  RegisterInput,
  RegisterOutput,
  SetRoleInput,
} from './dto/auth.input'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => LoginOutput)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginOutput)
  login(@Args('credentials') args: LoginInput) {
    return this.authService.login(args)
  }

  @Mutation(() => RegisterOutput)
  register(@Args('credentials') args: RegisterInput) {
    return this.authService.register(args)
  }
  @Mutation(() => RefreshTokenOutput)
  refreshToken(@Args('refreshTokenInput') args: RefreshTokenInput) {
    return this.authService.refreshToken(args)
  }

  @Mutation(() => Boolean)
  @AllowAuthenticated()
  setRole(
    @Args('setRoleInput') args: SetRoleInput,
    @GetUser() user: GetUserType,
  ) {
    const { uid, role } = args
    if (role === 'admin') {
      throw new BadRequestException(
        'Can not set admin role. Use setAdmin route.',
      )
    }
    checkRowLevelPermission(user, uid)
    return this.authService.setRole(user, role as Role)
  }

  @Mutation(() => Boolean)
  @AllowAuthenticated('admin')
  setAdmin(@Args('uid') uid: string, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, uid)
    return this.authService.setRole(user, 'admin')
  }
}
