import { Module } from '@nestjs/common'
import { AddressesService } from './addresses.service'
import { AddressesResolver } from './addresses.resolver'

@Module({
  providers: [AddressesResolver, AddressesService],
  exports: [AddressesService],
})
export class AddressesModule {}
