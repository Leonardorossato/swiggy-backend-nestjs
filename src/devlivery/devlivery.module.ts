import { Module } from '@nestjs/common';
import { DevliveryService } from './devlivery.service';
import { DevliveryController } from './devlivery.controller';

@Module({
  controllers: [DevliveryController],
  providers: [DevliveryService]
})
export class DevliveryModule {}
