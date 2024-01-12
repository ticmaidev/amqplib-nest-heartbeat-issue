interface EnvironmentVariables {
  tz: string;
  rmq: {
    urls: string[];
    queue: string;
    noAck: boolean;
    prefetchCount: number;
    queueOptions: {
      durable: boolean;
    };
  };
}

interface InferEnvironmentVariables {
  all: EnvironmentVariables
}