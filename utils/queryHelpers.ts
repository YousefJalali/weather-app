import slugify from 'slugify'

export function getFetchQuery(
  query:
    | { city: string; countryCode: string; lat: number; lon: number }
    | string
) {
  const data =
    typeof query === 'string'
      ? {
          city: query.substring(0, query.indexOf('?')).replace('/', ''),
          countryCode: new URLSearchParams(query).get('country') || '',
          lat: new URLSearchParams(query).get('lat') || 0,
          lon: new URLSearchParams(query).get('lon') || 0,
        }
      : {
          city: query.city,
          countryCode: query.countryCode,
          lat: query.lat,
          lon: query.lon,
        }

  return `q=${data.city.replaceAll('-', ' ')},${data.countryCode}&lat=${
    data.lat
  }&lon=${data.lon}`

  // return `q=${city.replaceAll('-', ' ')},${countryCode}`
  // return `q=${city.replaceAll('-', ' ')},${countryCode}&lat=${lat}&lon=${lon}`
}

export function getQueryPath({
  city,
  countryCode,
  lat,
  lon,
}: {
  city: string
  countryCode: string
  lat: number
  lon: number
}) {
  return `/${city}?&country=${countryCode}&lat=${lat}&lon=${lon}`
}
