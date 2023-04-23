import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { autoIncrementScreenNumber } from './middleware'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super()
    this.addMiddleware()
  }

  async onModuleInit() {
    await this.$connect()
  }

  private addMiddleware() {
    this.$use(autoIncrementScreenNumber)
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }
}
