import slugify from 'slugify'

export function constructPath(
  city: string,
  countryCode: string,
  lat: number,
  lon: number
) {
  return encodeURI(
    // `${slugify(city)}?&country=${countryCode}`
    `${slugify(city)}?&country=${countryCode}&lat=${lat}&lon=${lon}`
  )
}

export function constructQuery(
  city: string,
  countryCode: string,
  lat: number,
  lon: number
) {
  // return `q=${city.replaceAll('-', ' ')},${countryCode}`
  return `q=${city.replaceAll('-', ' ')},${countryCode}&lat=${lat}&lon=${lon}`
  // return `q=${city.replaceAll('-', ' ')},${countryCode}&lat=${lat}&lon=${lon}`
}

export function cookieToQuery(cookie: string) {
  return JSON.parse(cookie).map((city: string) => {
    const item = JSON.parse(city)

    return constructQuery(item.city, item.country, +item.lat, +item.lon)
  })
}
