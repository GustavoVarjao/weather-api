import fastify from 'fastify';
import { env } from './utils/env';
import { getWeatherData } from './controller';

const app = fastify({
  logger: true,
});

app.get('/weather', getWeatherData);

const start = async () => {
  try {
    await app.listen({ port: env.PORT });
  } catch (err) {
    app.log.error(err, 'error starting server');
    process.exit(1);
  }
};
void start();
