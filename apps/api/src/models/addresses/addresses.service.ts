import { Injectable } from '@nestjs/common'
import { FindManyAddressArgs, FindUniqueAddressArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateAddressInput } from './dto/create-address.input'
import { UpdateAddressInput } from './dto/update-address.input'

@Injectable()
export class AddressesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAddressInput: CreateAddressInput) {
    return this.prisma.address.create({
      data: createAddressInput,
    })
  }

  findAll(args: FindManyAddressArgs) {
    return this.prisma.address.findMany(args)
  }

  findOne(args: FindUniqueAddressArgs) {
    return this.prisma.address.findUnique(args)
  }

  update(updateAddressInput: UpdateAddressInput) {
    const { id, ...data } = updateAddressInput
    return this.prisma.address.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueAddressArgs) {
    return this.prisma.address.delete(args)
  }
}
