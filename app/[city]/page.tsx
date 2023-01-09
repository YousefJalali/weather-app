import { notFound } from 'next/navigation'

import { getCity } from '@/lib/data'
import { CityType } from '@/types/CityType'
import { getFetchQuery, getQueryPath } from '@/utils/queryHelpers'
import CityDetails from 'app/(city-details)/CityDetails'
import Forecast from 'app/(city-details)/(forecast)/Forecast'

export default async function Page({
  params,
  searchParams,
}: {
  params: { city: string }
  searchParams: { country: string; lat: number; lon: number }
}) {
  const queryPath = getQueryPath({
    city: params.city,
    countryCode: searchParams.country,
    lat: searchParams.lat,
    lon: searchParams.lon,
  })

  const data: CityType = await getCity(getFetchQuery(queryPath))

  if (!data) {
    notFound()
  }

  return (
    <CityDetails
      city={data}
      queryPath={queryPath}
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
