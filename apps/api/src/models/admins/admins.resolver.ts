import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { AdminsService } from './admins.service'
import { Admin } from './entities/admin.entity'

import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { BadRequestException } from '@nestjs/common'
import { AuthService } from 'src/common/auth/auth.service'

@Resolver(() => Admin)
export class AdminsResolver {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly auth: AuthService,
  ) {}

  @AllowAuthenticated()
  @Query(() => Admin, { name: 'adminMe' })
  adminMe(@GetUser() user: GetUserType) {
    return this.adminsService.findOne(user.uid)
  }

  @Mutation(() => Admin, { name: 'createAdmin' })
  async createAdmin(
    @Args('uid') uid: string,
    @Args('accessKey') accessKey: string,
  ) {
    if (accessKey !== process.env.SECRET_ACCESS_KEY) {
      throw new BadRequestException('Unauthorised.')
    }
    await this.auth.setRole(uid, 'admin')
    return this.adminsService.create(uid)
  }
}
