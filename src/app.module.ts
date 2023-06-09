import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresSqlConnection } from './config/ormconfig';
import { AuthModule } from './auth/auth.module';
import { KeycloakModule } from './keycloak/keycloak.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(PostgresSqlConnection),
    AuthModule,
    KeycloakModule,
  ],
})
export class AppModule {}
