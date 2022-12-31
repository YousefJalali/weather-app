const forecast = {
  cod: '200',
  message: 0,
  cnt: 96,
  list: [
    {
      dt: 1662217200,
      main: {
        temp: 294.14,
        feels_like: 293.99,
        temp_min: 294.14,
        temp_max: 294.14,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 931,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.91,
        deg: 104,
        gust: 1.92,
      },
      visibility: 10000,
      pop: 0.53,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-03 15:00:00',
    },
  ],
  city: {
    id: 3163858,
    name: 'Zocca',
    coord: {
      lat: 44.34,
      lon: 10.99,
    },
    country: 'IT',
    population: 4593,
    timezone: 7200,
    sunrise: 1661834187,
    sunset: 1661882248,
  },
}

export type ForecastType = typeof forecast
export type ForecastItemType = typeof forecast.list[0]
