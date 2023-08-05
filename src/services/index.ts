import { FetchError, ofetch } from 'ofetch';
import { WeatherData } from '../models/WeatherData';
import { env } from '../utils/env';

export const weatherDataRequest = async (
  city: string,
): Promise<WeatherData | string> => {
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
      if (err.status === 404) return 'city not found';
    }

    throw err;
  }
};
