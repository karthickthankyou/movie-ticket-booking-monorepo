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
import { Address } from '@prisma/client'
import { Cinema } from '../cinemas/entities/cinema.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Manager)
export class ManagersResolver {
  constructor(
    private readonly managersService: ManagersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Manager)
  createManager(@Args('createManagerInput') args: CreateManagerInput) {
    return this.managersService.create(args)
  }

  @Query(() => [Manager], { name: 'managers' })
  findAll(@Args() args: FindManyManagerArgs) {
    return this.managersService.findAll(args)
  }

  @Query(() => Manager, { name: 'manager' })
  findOne(@Args() args: FindUniqueManagerArgs) {
    return this.managersService.findOne(args)
  }

  @Mutation(() => Manager)
  updateManager(@Args('updateManagerInput') args: UpdateManagerInput) {
    return this.managersService.update(args)
  }

  @Mutation(() => Manager)
  removeManager(@Args() args: FindUniqueManagerArgs) {
    return this.managersService.remove(args)
  }

  @ResolveField(() => Cinema)
  cinema(@Parent() manager: Manager) {
    return this.prisma.cinema.findUnique({ where: { id: manager.cinemaId } })
  }
}
