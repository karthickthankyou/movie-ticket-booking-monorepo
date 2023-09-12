import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Request,
  UnauthorizedException,
} from '@nestjs/common'
import { AppService } from './app.service'
import { AuthService } from './common/auth/auth.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Post('set-admin')
  async setAdmin(@Request() req) {
    if (req.headers['x-secret-access-key'] !== process.env.SECRET_ACCESS_KEY) {
      throw new UnauthorizedException()
    }
    const { uid } = req.body
    if (!uid) {
      throw new BadRequestException('Uid is missing in the body.')
    }
    const updated = await this.authService.setRole(uid, 'admin')

    return { message: 'Admin role set to ' + uid }
  }
}
