import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevliveryService } from './devlivery.service';
import { CreateDevliveryDto } from './dto/create-devlivery.dto';
import { UpdateDevliveryDto } from './dto/update-devlivery.dto';

@Controller('devlivery')
export class DevliveryController {
  constructor(private readonly devliveryService: DevliveryService) {}

  @Post()
  create(@Body() createDevliveryDto: CreateDevliveryDto) {
    return this.devliveryService.create(createDevliveryDto);
  }

  @Get()
  findAll() {
    return this.devliveryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devliveryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDevliveryDto: UpdateDevliveryDto) {
    return this.devliveryService.update(+id, updateDevliveryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devliveryService.remove(+id);
  }
}
