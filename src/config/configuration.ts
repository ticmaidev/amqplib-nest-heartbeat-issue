import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";

export async function bootstrapConfig(): Promise<EnvironmentVariables> {
  let config: EnvironmentVariables;

  try {
    const app = await NestFactory.create(AppModule, {})
    const service = app.get(ConfigService<InferEnvironmentVariables>);

    config = { ...service.getOrThrow('all', { infer: true }) }

    app.close()
  }
  catch (error) {
    console.error(error)
  }

  return config
}

export default () => ({
  all: {
    tz: process.env.TZ,
    rmq: {
      urls: [
        `amqp://${process.env.RMQ_HOST}:${process.env.RMQ_PORT}`
      ],
      queue: process.env.RMQ_QUEUE_NAME,
      noAck: process.env.RMQ_NO_ACK === 'true',
      prefetchCount: parseInt(process.env.RMQ_PREFETCH_COUNT, 10),
      queueOptions: {
        durable: process.env.RMQ_QUEUE_DURBLE === 'true'
      }
    }
  }
});
