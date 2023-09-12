import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entities/user.entity'
import { FindManyUserArgs, FindUniqueUserArgs } from './dto/find.args'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Booking } from '../bookings/entities/booking.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => User)
  createUser(
    @Args('createUserInput') args: CreateUserInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.usersService.createIfNotFound(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs) {
    return this.usersService.findAll(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => User, { name: 'user' })
  findOne(@Args() args: FindUniqueUserArgs) {
    return this.usersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  updateUser(
    @Args('updateUserInput') args: UpdateUserInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.usersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  removeUser(@Args() args: FindUniqueUserArgs, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.where.uid)
    return this.usersService.remove(args)
  }

  @ResolveField(() => [Booking])
  bookings(@Parent() user: User) {
    return this.prisma.booking.findMany({ where: { userId: user.uid } })
  }
}
