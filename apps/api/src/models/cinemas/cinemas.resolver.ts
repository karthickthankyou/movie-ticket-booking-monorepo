import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { CinemasService } from './cinemas.service'
import { Cinema } from './entities/cinema.entity'
import { FindManyCinemaArgs, FindUniqueCinemaArgs } from './dto/find.args'
import { CreateCinemaInput } from './dto/create-cinema.input'
import { UpdateCinemaInput } from './dto/update-cinema.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Address } from '../addresses/entities/address.entity'
import { Manager } from '../managers/entities/manager.entity'
import { Screen } from '../screens/entities/screen.entity'

@Resolver(() => Cinema)
export class CinemasResolver {
  constructor(
    private readonly cinemasService: CinemasService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Cinema)
  createCinema(@Args('createCinemaInput') args: CreateCinemaInput) {
    return this.cinemasService.create(args)
  }

  @Query(() => [Cinema], { name: 'cinemas' })
  findAll(@Args() args: FindManyCinemaArgs) {
    return this.cinemasService.findAll(args)
  }

  @Query(() => Cinema, { name: 'cinema' })
  findOne(@Args() args: FindUniqueCinemaArgs) {
    return this.cinemasService.findOne(args)
  }

  @Mutation(() => Cinema)
  updateCinema(@Args('updateCinemaInput') args: UpdateCinemaInput) {
    return this.cinemasService.update(args)
  }

  @Mutation(() => Cinema)
  removeCinema(@Args() args: FindUniqueCinemaArgs) {
    return this.cinemasService.remove(args)
  }

  @ResolveField(() => Address)
  address(@Parent() cinema: Cinema) {
    return this.prisma.address.findUnique({ where: { cinemaId: cinema.id } })
  }

  @ResolveField(() => [Manager])
  managers(@Parent() cinema: Cinema) {
    return this.prisma.manager.findMany({ where: { cinemaId: cinema.id } })
  }

  @ResolveField(() => [Screen])
  screens(@Parent() cinema: Cinema) {
    return this.prisma.screen.findMany({ where: { cinemaId: cinema.id } })
  }
}
