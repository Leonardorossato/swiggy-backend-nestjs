import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'nest-keycloak-connect';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { RolesInterceptor } from 'src/decorator/keycloak.decorator';

@Controller('users')
@ApiBearerAuth()
@ApiTags('Usuarios')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  @UseInterceptors(RolesInterceptor)
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get('/all')
  @UseInterceptors(RolesInterceptor)
  async findAll() {
    return await this.usersService.findAll();
  }
}
