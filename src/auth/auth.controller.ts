import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/login.auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'nest-keycloak-connect';

@Controller('auth')
@ApiTags('Autenticação')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/login')
  async login(@Body() dto: AuthLoginDto) {
    return await this.authService.login(dto);
  }
}
