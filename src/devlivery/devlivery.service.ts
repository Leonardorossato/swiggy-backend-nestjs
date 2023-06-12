import { Injectable } from '@nestjs/common';
import { CreateDevliveryDto } from './dto/create-devlivery.dto';
import { UpdateDevliveryDto } from './dto/update-devlivery.dto';

@Injectable()
export class DevliveryService {
  create(createDevliveryDto: CreateDevliveryDto) {
    return 'This action adds a new devlivery';
  }

  findAll() {
    return `This action returns all devlivery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devlivery`;
  }

  update(id: number, updateDevliveryDto: UpdateDevliveryDto) {
    return `This action updates a #${id} devlivery`;
  }

  remove(id: number) {
    return `This action removes a #${id} devlivery`;
  }
}
