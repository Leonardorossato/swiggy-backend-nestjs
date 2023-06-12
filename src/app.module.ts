import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresSqlConnection } from './config/ormconfig';
import { AuthModule } from './auth/auth.module';
import { KeycloakModule } from './keycloak/keycloak.module';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { KeycloakConfigService } from './keycloak/keycloak.service';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { RequestContextModule } from 'nestjs-request-context';
import { RolesInterceptor } from './decorator/keycloak.decorator';
import { AddressModule } from './address/address.module';
import { DevliveryModule } from './devlivery/devlivery.module';
import { BillModule } from './bill/bill.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync(PostgresSqlConnection),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    KeycloakModule,
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [KeycloakModule, RequestContextModule],
    }),
    UsersModule,
    AddressModule,
    DevliveryModule,
    BillModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RolesInterceptor,
    },
  ],
})
export class AppModule {}
