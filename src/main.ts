import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from 'src/app.module';
import { bootstrapConfig } from 'src/config/configuration';

async function bootstrap() {

  const config = await bootstrapConfig()

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      ...config.rmq,
      socketOptions: {
        heartbeatIntervalInSeconds: 5,
      }
    },
  });

  await app.listen();
}

bootstrap();
