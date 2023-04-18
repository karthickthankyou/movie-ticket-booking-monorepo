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

@Resolver(() => Screen)
export class ScreensResolver {
  constructor(
    private readonly screensService: ScreensService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Screen)
  createScreen(@Args('createScreenInput') args: CreateScreenInput) {
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
  updateScreen(@Args('updateScreenInput') args: UpdateScreenInput) {
    return this.screensService.update(args)
  }

  @Mutation(() => Screen)
  removeScreen(@Args() args: FindUniqueScreenArgs) {
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
  @ResolveField(() => [Showtime])
  showtimes(@Parent() screen: Screen) {
    return this.prisma.showtime.findMany({ where: { screenId: screen.id } })
  }
}
