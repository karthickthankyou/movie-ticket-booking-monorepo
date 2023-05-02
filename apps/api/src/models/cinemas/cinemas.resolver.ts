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
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@showtime-org/types'
import { checkRowLevelPermission } from 'src/common/guards'
import { AuthService } from 'src/common/auth/auth.service'
import {
  AggregateCountOutput,
  LocationFilterInput,
} from 'src/common/dtos/common.input'
import { CinemaWhereInput } from './dto/where.args'

@Resolver(() => Cinema)
export class CinemasResolver {
  constructor(
    private readonly cinemasService: CinemasService,
    private readonly prisma: PrismaService,
    private readonly auth: AuthService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Cinema)
  createCinema(
    @Args('createCinemaInput') args: CreateCinemaInput,
    @GetUser() user: GetUserType,
  ) {
    console.log('user', user, args)
    checkRowLevelPermission(user, args.manager.uid)
    if (!(user.roles || []).includes('manager'))
      this.auth.setRole(user, 'manager')
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
  @Query(() => Cinema, { name: 'cinemaByManager' })
  cinemaByManager(@Args('uid') uid: string) {
    return this.cinemasService.findByManager(uid)
  }

  @AllowAuthenticated()
  @Mutation(() => Cinema)
  async updateCinema(
    @Args('updateCinemaInput') args: UpdateCinemaInput,
    @GetUser() user: GetUserType,
  ) {
    const cinema = await this.prisma.cinema.findUnique({
      where: { id: args.id },
      include: { managers: true },
    })
    checkRowLevelPermission(
      user,
      cinema.managers.map((m) => m.uid),
    )

    return this.cinemasService.update(args)
  }

  @Mutation(() => Cinema)
  async removeCinema(
    @Args() args: FindUniqueCinemaArgs,
    @GetUser() user: GetUserType,
  ) {
    const cinema = await this.prisma.cinema.findUnique({
      where: args.where,
      include: { managers: true },
    })
    checkRowLevelPermission(
      user,
      cinema.managers.map((m) => m.uid),
    )
    return this.cinemasService.remove(args)
  }

  @ResolveField(() => Address)
  address(@Parent() cinema: Cinema) {
    return this.prisma.address.findUnique({ where: { cinemaId: cinema.id } })
  }

  @ResolveField(() => [Manager])
  managers(@Parent() cinema: Cinema) {
    return this.prisma.manager.findMany({
      where: { cinema: { some: { id: cinema.id } } },
    })
  }

  @ResolveField(() => [Screen])
  screens(@Parent() cinema: Cinema) {
    return this.prisma.screen.findMany({ where: { cinemaId: cinema.id } })
  }

  @Query(() => AggregateCountOutput, {
    name: 'cinemasCount',
  })
  async cinemasCount(
    @Args('where', { nullable: true })
    where: CinemaWhereInput,
  ) {
    const cinemas = await this.prisma.cinema.aggregate({
      _count: { _all: true },
      where,
    })
    return { count: cinemas._count._all }
  }

  @Query(() => [Cinema], { name: 'searchCinemas' })
  async searchKitchens(
    @Args('locationFilter') locationFilter: LocationFilterInput,
    @Args({ nullable: true })
    { cursor, distinct, orderBy, skip, take, where }: FindManyCinemaArgs,
  ) {
    const { ne_lat, ne_lng, sw_lat, sw_lng } = locationFilter

    return this.prisma.cinema.findMany({
      cursor,
      distinct,
      orderBy,
      skip,
      take,
      where: {
        ...where,
        // open: { equals: true },
        address: {
          lat: { lte: ne_lat, gte: sw_lat },
          lng: { lte: ne_lng, gte: sw_lng },
        },
      },
    })
  }
}
