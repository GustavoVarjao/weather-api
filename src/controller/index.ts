import { weatherDataRequest } from '../services';
import { FastifyReply, FastifyRequest } from 'fastify';

export const getWeatherData = async (
  request: FastifyRequest<{ Querystring: { city: string } }>,
  reply: FastifyReply,
) => {
  const { city } = request.query;

  const response = await weatherDataRequest(city);

  return reply.status(200).send({ response });
};
