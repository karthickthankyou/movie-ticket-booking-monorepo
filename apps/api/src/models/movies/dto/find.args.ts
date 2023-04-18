import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { MovieOrderByWithRelationInput } from './orderBy.args'
import { MovieWhereInput, MovieWhereUniqueInput } from './where.args'

registerEnumType(Prisma.MovieScalarFieldEnum, {
  name: 'MovieScalarFieldEnum',
})

@ArgsType()
export class FindManyMovieArgs
  implements Required<Omit<Prisma.MovieFindManyArgs, 'include' | 'select'>>
{
  @Field(() => MovieWhereInput, { nullable: true })
  where: MovieWhereInput
  @Field(() => [MovieOrderByWithRelationInput], { nullable: true })
  orderBy: MovieOrderByWithRelationInput[]
  @Field(() => MovieWhereUniqueInput, { nullable: true })
  cursor: MovieWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.MovieScalarFieldEnum], { nullable: true })
  distinct: Prisma.MovieScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueMovieArgs {
  @Field({ nullable: true })
  where: MovieWhereUniqueInput
}
