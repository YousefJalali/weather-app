import Link from 'next/link'
import { CityType } from '@/types/CityType'
import { Card } from '@/ui/card'
import { constructPath } from '@/utils/slugify'
import { cookies } from 'next/headers'
import { getCities } from '@/lib/data'
import { cookieToQuery } from '@/utils/slugify'
import UserLocation from './(user-location)/UserLocation'
import EmptyFavList from './EmptyFavList'

const POPULAR_CITIES = [
  'Doha?&country=QA&lat=25.28545&lon=51.53096',
  'Agadir?&country=MA&lat=30.4202&lon=-9.5982',
  'Marrakesh?&country=MA&lat=31.63416&lon=-7.99994',
]

export default async function Page() {
  const nextCookies = cookies()
  const favCities = nextCookies.get('fav-cities')

  const isCookieExist = favCities && JSON.parse(favCities.value).length > 0

  const fetchedCities: CityType[] = await getCities(
    isCookieExist ? cookieToQuery(favCities.value) : POPULAR_CITIES
  )

  return (
    <>
      <UserLocation />

      <section>
        <ul className="space-y-6">
          {fetchedCities.length <= 0 ? (
            <EmptyFavList />
          ) : (
            fetchedCities.map((city) => (
              <li key={city.id}>
                <Link
                  href={`/${constructPath(
                    city.name,
                    city.sys.country,
                    city.coord.lat,
                    city.coord.lon
                  )}`}
                >
                  <Card city={city} popular={!isCookieExist} />
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>
    </>
  )
}
