import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { AddressesService } from './addresses.service'
import { Address } from './entities/address.entity'
import { FindManyAddressArgs, FindUniqueAddressArgs } from './dto/find.args'
import { CreateAddressInput } from './dto/create-address.input'
import { UpdateAddressInput } from './dto/update-address.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Cinema } from '../cinemas/entities/cinema.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@showtime-org/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => Address)
export class AddressesResolver {
  constructor(
    private readonly addressesService: AddressesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => Address)
  async createAddress(
    @Args('createAddressInput') args: CreateAddressInput,
    @GetUser() user: GetUserType,
  ) {
    const managers = await this.addressesService.getManagers(args.cinemaId)
    checkRowLevelPermission(user, managers)
    return this.addressesService.create(args)
  }

  @Query(() => [Address], { name: 'addresses' })
  findAll(@Args() args: FindManyAddressArgs) {
    return this.addressesService.findAll(args)
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args() args: FindUniqueAddressArgs) {
    return this.addressesService.findOne(args)
  }

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => Address)
  async updateAddress(
    @Args('updateAddressInput') args: UpdateAddressInput,
    @GetUser() user: GetUserType,
  ) {
    const managers = await this.addressesService.getManagers(args.cinemaId)
    checkRowLevelPermission(user, managers)
    return this.addressesService.update(args)
  }

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => Address)
  async removeAddress(
    @Args() args: FindUniqueAddressArgs,
    @GetUser() user: GetUserType,
  ) {
    const cinema = await this.prisma.cinema.findFirst({
      where: { address: { id: args.where.id } },
      include: { managers: true },
    })
    const managers = cinema.managers.map((manager) => manager.uid)
    checkRowLevelPermission(user, managers)
    return this.addressesService.remove(args)
  }

  @ResolveField(() => Cinema, { nullable: true })
  cinema(@Parent() address: Address) {
    return this.prisma.cinema.findUnique({ where: { id: address.cinemaId } })
  }
}
