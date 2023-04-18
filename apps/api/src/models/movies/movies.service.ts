import { Injectable } from '@nestjs/common'
import { FindManyMovieArgs, FindUniqueMovieArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateMovieInput } from './dto/create-movie.input'
import { UpdateMovieInput } from './dto/update-movie.input'

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMovieInput: CreateMovieInput) {
    return this.prisma.movie.create({
      data: createMovieInput,
    })
  }

  findAll(args: FindManyMovieArgs) {
    return this.prisma.movie.findMany(args)
  }

  findOne(args: FindUniqueMovieArgs) {
    return this.prisma.movie.findUnique(args)
  }

  update(updateMovieInput: UpdateMovieInput) {
    const { id, ...data } = updateMovieInput
    return this.prisma.movie.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueMovieArgs) {
    return this.prisma.movie.delete(args)
  }
}
