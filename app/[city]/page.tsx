import { notFound } from 'next/navigation'

import { getCity } from '@/lib/data'
import { CityType } from '@/types/CityType'
import { constructQuery } from '@/utils/slugify'
import CityDetails from 'app/(city-details)/CityDetails'
import Forecast from 'app/(city-details)/(forecast)/Forecast'

export default async function Page({
  params,
  searchParams,
}: {
  params: { city: string }
  searchParams: { country: string; lat: number; lon: number }
}) {
  const query = constructQuery(
    params.city,
    searchParams.country,
    searchParams.lat,
    searchParams.lon
  )
  const data: CityType = await getCity(query)

  if (!data) {
    notFound()
  }

  return (
    <CityDetails
      city={data}
      query={query}
      forecast={
        /* 
        // @ts-expect-error Server Component */
        <Forecast
          coords={{
            lon: searchParams.lon.toString(),
            lat: searchParams.lat.toString(),
          }}
        />
      }
    />
  )
}
