import { Injectable } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
import { AuthLoginDto } from './dto/login.auth.dto';

@Injectable()
export class AuthService {
  async login(dto: AuthLoginDto) {
    try {
      const result = await axios.post(
        `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
        {
          ...dto,
          grant_type: 'password',
          client_id: `${process.env.KEYCLOAK_CLIENT_ID}`,
          client_secret: `${process.env.KEYCLOAK_SECRET}`,
          scope: 'openid',
        },
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
      );
      return result.data;
    } catch (error) {
      const err = error as AxiosError;
      return { message: err.message };
    }
  }
}
