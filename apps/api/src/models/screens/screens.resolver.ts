import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { ScreensService } from './screens.service'
import { Screen } from './entities/screen.entity'
import { FindManyScreenArgs, FindUniqueScreenArgs } from './dto/find.args'
import { CreateScreenInput } from './dto/create-screen.input'
import { UpdateScreenInput } from './dto/update-screen.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Cinema } from '../cinemas/entities/cinema.entity'
import { Seat } from '../seats/entities/seat.entity'
import { Showtime } from '../showtimes/entities/showtime.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { checkRowLevelPermission } from 'src/common/guards'
import { GetUserType } from '@showtime-org/types'

@Resolver(() => Screen)
export class ScreensResolver {
  constructor(
    private readonly screensService: ScreensService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => Screen)
  async createScreen(
    @Args('createScreenInput') args: CreateScreenInput,
    @GetUser() user: GetUserType,
  ) {
    const cinema = await this.prisma.cinema.findUnique({
      where: { id: args.cinemaId },
      include: { managers: true },
    })
    checkRowLevelPermission(
      user,
      cinema.managers.map((m) => m.uid),
    )
    return this.screensService.create(args)
  }

  @Query(() => [Screen], { name: 'screens' })
  findAll(@Args() args: FindManyScreenArgs) {
    return this.screensService.findAll(args)
  }

  @Query(() => Screen, { name: 'screen' })
  findOne(@Args() args: FindUniqueScreenArgs) {
    return this.screensService.findOne(args)
  }

  @Mutation(() => Screen)
  async updateScreen(
    @Args('updateScreenInput') args: UpdateScreenInput,
    @GetUser() user: GetUserType,
  ) {
    const cinema = await this.prisma.cinema.findUnique({
      where: { id: args.cinemaId },
      include: { managers: true },
    })
    checkRowLevelPermission(
      user,
      cinema.managers.map((m) => m.uid),
    )
    return this.screensService.update(args)
  }

  @Mutation(() => Screen)
  async removeScreen(
    @Args() args: FindUniqueScreenArgs,
    @GetUser() user: GetUserType,
  ) {
    const screen = await this.prisma.screen.findUnique({
      where: args.where,
      include: { cinema: { include: { managers: true } } },
    })
    checkRowLevelPermission(
      user,
      screen.cinema.managers.map((m) => m.uid),
    )
    return this.screensService.remove(args)
  }

  @ResolveField(() => Cinema)
  cinema(@Parent() screen: Screen) {
    return this.prisma.cinema.findUnique({ where: { id: screen.cinemaId } })
  }
  @ResolveField(() => [Seat])
  seats(@Parent() screen: Screen) {
    return this.prisma.seat.findMany({ where: { screenId: screen.id } })
  }
  @ResolveField(() => Number)
  async seatsCount(@Parent() screen: Screen) {
    const count = await this.prisma.seat.count({
      where: { screenId: screen.id },
    })
    return count
  }
  @ResolveField(() => [Showtime])
  showtimes(@Parent() screen: Screen) {
    return this.prisma.showtime.findMany({ where: { screenId: screen.id } })
  }
}
