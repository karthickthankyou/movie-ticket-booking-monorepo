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

@Resolver(() => Address)
export class AddressesResolver {
  constructor(
    private readonly addressesService: AddressesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Address)
  createAddress(@Args('createAddressInput') args: CreateAddressInput) {
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

  @Mutation(() => Address)
  updateAddress(@Args('updateAddressInput') args: UpdateAddressInput) {
    return this.addressesService.update(args)
  }

  @Mutation(() => Address)
  removeAddress(@Args() args: FindUniqueAddressArgs) {
    return this.addressesService.remove(args)
  }

  @ResolveField(() => Cinema)
  cinema(@Parent() address: Address) {
    return this.prisma.cinema.findUnique({ where: { id: address.cinemaId } })
  }
}
