import { PartialType } from '@nestjs/swagger';
import { CreateDevliveryDto } from './create-devlivery.dto';

export class UpdateDevliveryDto extends PartialType(CreateDevliveryDto) {}
