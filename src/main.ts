import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Swiggy Backend Nestjs Api')
    .setDescription(
      'Swiggy Backend Api with NestJs, TypeOrm, Swagger, Postgres and Docker',
    )
    .addBearerAuth()
    .setVersion('1.0')
    .build();


  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.APP_PORT);
}
void bootstrap();
