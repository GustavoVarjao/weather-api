import fastify from 'fastify';
import 'dotenv/config';

const app = fastify({
  logger: true,
});

app.get('/test', (request, reply) => {
  return reply.send({ text: 'test' });
});

void app.listen({
  port: process.env.PORT as unknown as number,
});
