import fastify from 'fastify';
import { env } from './utils/env';

const app = fastify({
  logger: true,
});

app.get('/test', (request, reply) => {
  return reply.send({ text: 'test' });
});

const start = async () => {
  try {
    await app.listen({ port: env.PORT });
  } catch (err) {
    app.log.error(err, 'error starting server');
    process.exit(1);
  }
};
void start();
