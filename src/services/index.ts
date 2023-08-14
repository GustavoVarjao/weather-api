import { FetchError, ofetch } from 'ofetch';
import { WeatherData } from '../models/WeatherData';
import { env } from '../utils/env';
import { weatherError } from '../models/WeatherError';

export const weatherDataRequest = async (
  city: string,
): Promise<WeatherData | weatherError> => {
  try {
    const { main, clouds, weather, sys, name } = await ofetch<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${env.API_KEY}&lang=pt_br`,
    );

    return {
      main,
      clouds,
      weather,
      sys,
      name,
    };
  } catch (err) {
    if (err instanceof FetchError) {
      return {
        status: err.status,
        error: err.message,
      };
    }

    throw err;
  }
};
