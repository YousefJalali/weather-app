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
  const data: CityType = await getCity(
    constructQuery(
      params.city,
      searchParams.country,
      searchParams.lat,
      searchParams.lon
    )
  )

  if (!data) {
    notFound()
  }

  const cookie = {
    city: params.city,
    country: searchParams.country,
    lat: searchParams.lat,
    lon: searchParams.lon,
  }

  return (
    <CityDetails
      city={data}
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
