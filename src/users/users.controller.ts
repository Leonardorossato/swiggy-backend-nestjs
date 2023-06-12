import {
  Body,
  Controller,
  Get,
  Post
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'nest-keycloak-connect';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import {config} from 'dotenv';
config({ path: './.env' });
@Controller('users')
@ApiBearerAuth()
@ApiTags('Usuarios')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  @Roles({ roles: [`realm:${process.env.KEYCLOAK_CLIENT_ID}-backend-create`] })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get('/all')
  @Roles({ roles: [`realm:${process.env.KEYCLOAK_CLIENT_ID}-backend-read`] })
  async findAll() {
    return await this.usersService.findAll();
  }
}
