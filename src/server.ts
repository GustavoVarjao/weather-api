import fastify from 'fastify';
import { env } from './utils/env';

const app = fastify({
  logger: true,
});

app.get('/test', (request, reply) => {
  return reply.send({ text: 'test' });
});

void app.listen({ port: env.PORT });
