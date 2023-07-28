import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Injectable()
export class AdminsService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(uid: string) {
    return this.prisma.admin.findUnique({ where: { uid: uid } })
  }
}
