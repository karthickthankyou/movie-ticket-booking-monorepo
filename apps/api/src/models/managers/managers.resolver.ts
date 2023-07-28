import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { ManagersService } from './managers.service'
import { Manager } from './entities/manager.entity'
import { FindManyManagerArgs, FindUniqueManagerArgs } from './dto/find.args'
import { CreateManagerInput } from './dto/create-manager.input'
import { UpdateManagerInput } from './dto/update-manager.input'
import { Cinema } from '../cinemas/entities/cinema.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@showtime-org/types'
import { checkRowLevelPermission } from 'src/common/guards'
import { AuthService } from 'src/common/auth/auth.service'

@Resolver(() => Manager)
export class ManagersResolver {
  constructor(
    private readonly managersService: ManagersService,
    private readonly prisma: PrismaService,
    private readonly auth: AuthService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Manager)
  createManager(
    @Args('createManagerInput') args: CreateManagerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    if (!user.roles.includes('manager')) this.auth.setRole(user, 'manager')
    return this.managersService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Manager], { name: 'managers' })
  findAll(@Args() args: FindManyManagerArgs) {
    return this.managersService.findAll(args)
  }

  @Query(() => Manager, { name: 'manager' })
  findOne(@Args() args: FindUniqueManagerArgs) {
    return this.managersService.findOne(args)
  }

  @AllowAuthenticated()
  @Query(() => Manager, { name: 'managerMe' })
  managerMe(@GetUser() user: GetUserType) {
    return this.managersService.findOne({
      where: { uid: user.uid },
    })
  }

  @AllowAuthenticated()
  @Mutation(() => Manager)
  updateManager(
    @Args('updateManagerInput') args: UpdateManagerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.managersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Manager)
  removeManager(
    @Args() args: FindUniqueManagerArgs,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.where.uid)
    return this.managersService.remove(args)
  }

  @ResolveField(() => Cinema)
  cinema(@Parent() manager: Manager) {
    return this.prisma.cinema.findUnique({ where: { id: manager.cinemaId } })
  }
}
