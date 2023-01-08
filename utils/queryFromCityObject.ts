import { CityType } from '@/types/CityType'

export function queryFromCityObject(city: CityType) {
  return `/${city.name}?&country=${city.sys.country}&lat=${city.coord.lat}&lon=${city.coord.lon}`
}
