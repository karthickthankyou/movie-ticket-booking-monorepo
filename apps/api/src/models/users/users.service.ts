import { Injectable } from '@nestjs/common'
import { FindManyUserArgs, FindUniqueUserArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async createIfNotFound(createUserInput: CreateUserInput) {
    const user = await this.prisma.user.findUnique({
      where: { uid: createUserInput.uid },
    })
    if (user?.uid) {
      return user
    }
    return this.prisma.user.create({
      data: createUserInput,
    })
  }

  findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args)
  }

  findOne(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args)
  }

  update(updateUserInput: UpdateUserInput) {
    const { uid, ...data } = updateUserInput
    return this.prisma.user.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueUserArgs) {
    return this.prisma.user.delete(args)
  }
}
