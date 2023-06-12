import {
  CallHandler,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { KeycloakService } from 'nest-keycloak';
import { Observable } from 'rxjs';

@Injectable()
export class RolesInterceptor implements NestInterceptor {
  constructor(
    private reflector: Reflector
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return next.handle();
    }

    const request = context.switchToHttp().getRequest();
    const { user } = request;

    // Verifique as permissões usando as funções do Keycloak do usuário autenticado
    const hasPermission = roles.every((role) => this.hasRole(user, role));

    if (!hasPermission) {
      throw new ForbiddenException(
        'Você não tem permissão para acessar este recurso.',
      );
    }

    return next.handle();
  }

  private hasRole(user: any, role: string): boolean {
    const resourceAccess = user?.resourceAccess;
    if (resourceAccess) {
      // Verifique se o usuário possui a função em algum recurso
      for (const resource in resourceAccess) {
        if (resourceAccess[resource].roles?.includes(role)) {
          return true;
        }
      }
    }
    return false;
  }
}
