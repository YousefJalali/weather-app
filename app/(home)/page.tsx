import { CityType } from '@/types/CityType'
import { cookies } from 'next/headers'
import { getCities } from '@/lib/data'
import UserLocation from './(user-location)/UserLocation'
import CityItem from './CityItem'
import Forecast from 'app/(city-details)/(forecast)/Forecast'

const POPULAR_CITIES = [
  'Doha?&country=QA&lat=25.28545&lon=51.53096',
  'Agadir?&country=MA&lat=30.4202&lon=-9.5982',
  'Marrakesh?&country=MA&lat=31.63416&lon=-7.99994',
]

export default async function Page() {
  const nextCookies = cookies()
  const favCities = nextCookies.get('fav-cities')
  const userLocationCookie = nextCookies.get('user-location')

  const isCookieExist = favCities && JSON.parse(favCities.value).length > 0
  const isUserLocationDismissed =
    userLocationCookie && JSON.parse(userLocationCookie.value).length > 0

  const fetchedCities: CityType[] = await getCities(
    isCookieExist ? JSON.parse(favCities.value) : POPULAR_CITIES
  )

  return (
    <>
      {!isUserLocationDismissed && <UserLocation />}

      <section>
        <ul className="space-y-6">
          {fetchedCities.map((city) => (
            <li key={city.id}>
              <CityItem
                city={city}
                tag={!isCookieExist}
                forecast={
                  /* 
                  // @ts-expect-error Server Component */
                  <Forecast
                    coords={{
                      lat: city.coord.lat.toString(),
                      lon: city.coord.lon.toString(),
                    }}
                  />
                }
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
