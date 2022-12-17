const city = {
  coord: { lon: 51.5797, lat: 24.9382 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
  base: 'stations',
  main: {
    temp: 20.03,
    feels_like: 19.63,
    temp_min: 18.97,
    temp_max: 20.03,
    pressure: 1019,
    humidity: 59,
    sea_level: 1019,
    grnd_level: 1019,
  },
  visibility: 10000,
  wind: { speed: 2.25, deg: 328, gust: 2.56 },
  clouds: { all: 0 },
  dt: 1670907367,
  sys: {
    type: 1,
    id: 7614,
    country: 'QA',
    sunrise: 1670900976,
    sunset: 1670939163,
  },
  timezone: 10800,
  id: 289913,
  name: 'Al Wukayr',
  cod: 200,
}

export type CityType = typeof city
