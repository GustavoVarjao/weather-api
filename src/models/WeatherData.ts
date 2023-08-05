export interface WeatherData {
  clouds: {
    all: number;
  };
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    },
  ];
}
