import { Module } from '@nestjs/common';
import { KeycloakService } from './keycloak.service';
import { KeycloakController } from './keycloak.controller';

@Module({
  controllers: [KeycloakController],
  providers: [KeycloakService]
})
export class KeycloakModule {}
