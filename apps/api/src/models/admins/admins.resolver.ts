import { Resolver, Query } from '@nestjs/graphql'
import { AdminsService } from './admins.service'
import { Admin } from './entities/admin.entity'

import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@showtime-org/types'

@Resolver(() => Admin)
export class AdminsResolver {
  constructor(private readonly adminsService: AdminsService) {}

  @AllowAuthenticated()
  @Query(() => Admin, { name: 'adminMe' })
  adminMe(@GetUser() user: GetUserType) {
    return this.adminsService.findOne(user.uid)
  }
}
