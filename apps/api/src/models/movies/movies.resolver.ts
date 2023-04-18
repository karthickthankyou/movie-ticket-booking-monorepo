import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { MoviesService } from './movies.service'
import { Movie } from './entities/movie.entity'
import { FindManyMovieArgs, FindUniqueMovieArgs } from './dto/find.args'
import { CreateMovieInput } from './dto/create-movie.input'
import { UpdateMovieInput } from './dto/update-movie.input'
import { Showtime } from '../showtimes/entities/showtime.entity'
import { Address } from '@prisma/client'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Movie)
  createMovie(@Args('createMovieInput') args: CreateMovieInput) {
    return this.moviesService.create(args)
  }

  @Query(() => [Movie], { name: 'movies' })
  findAll(@Args() args: FindManyMovieArgs) {
    return this.moviesService.findAll(args)
  }

  @Query(() => Movie, { name: 'movie' })
  findOne(@Args() args: FindUniqueMovieArgs) {
    return this.moviesService.findOne(args)
  }

  @Mutation(() => Movie)
  updateMovie(@Args('updateMovieInput') args: UpdateMovieInput) {
    return this.moviesService.update(args)
  }

  @Mutation(() => Movie)
  removeMovie(@Args() args: FindUniqueMovieArgs) {
    return this.moviesService.remove(args)
  }

  @ResolveField(() => [Showtime])
  showtimes(@Parent() movie: Movie) {
    return this.prisma.showtime.findMany({ where: { movieId: movie.id } })
  }
}
