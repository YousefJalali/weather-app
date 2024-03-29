import { SearchType } from '@/types/SearchType'

const baseUrl = 'https://api.openweathermap.org'

export async function getCity(city: string) {
  if (city === '') return

  //fetch by city name
  const res = await fetch(
    `${baseUrl}/data/2.5/weather?${city}&appid=${process.env.WEATHER_KEY}&units=metric&lang=en`,
    { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    if (res.status === 404) {
      //try to fetch by coords
      const q = new URLSearchParams(city)
      const lat = q.get('lat')
      const lon = q.get('lon')

      const secondRes = await fetch(
        `${baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}&units=metric&lang=en`,
        { next: { revalidate: 60 } }
      )

      if (secondRes.ok) {
        return secondRes.json()
      }

      return undefined
    }

    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getCities(cities: string[] | null) {
  if (!cities || typeof cities !== 'object' || cities.length <= 0) return []

  return await Promise.all(cities.map((city) => getCity(city)))
}

export async function getSuggestions(city: string) {
  const res = await fetch(
    `https://data.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000%40public&q=${city}&lang=en&rows=50&sort=name`
    // `http://autocomplete.travelpayouts.com/places2?term=${city}&locale=en&types[]=city`
  )

  if (!res.ok) {
    return []
  }

  const data: SearchType = await res.json()

  return data.records
}

export async function getCityFromClient(city: string) {
  const res = await fetch(`/api/user/city?${city}`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    // console.log('[getCityFromClient]:', res)
    if (res.status === 404) {
      return undefined
    }

    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getForecast({ lat, lon }: { lat: string; lon: string }) {
  const res = await fetch(
    `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}&units=metric&lang=en`,
    { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    return undefined
  }

  return res.json()
}
