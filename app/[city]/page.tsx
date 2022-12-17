import { notFound } from 'next/navigation'
import Image from 'next/image'
import styles from '@/styles/Details.module.css'
import { FiArrowLeft, FiNavigation } from 'react-icons/fi'
import WeatherDetails from './WeatherDetails'

import { getCity } from '@/lib/data'
import { CityType } from '@/types/CityType'
import { constructQuery } from '@/utils/slugify'
import AddButton from './AddButton'

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
    <>
      <AddButton city={JSON.stringify(cookie)} />

      <div className={styles.details}>
        <Image
          src={`/${data.weather[0].icon}.svg`}
          alt={data.weather[0].main}
          width={91.43 * 1.5}
          height={84 * 1.5}
        />
        <div className={styles.title}>
          <h1>{data.name}</h1>
          {/* <span>
            <FiNavigation />
          </span> */}
        </div>
        <div className={styles.temp}>
          <span>{Math.round(data.main.temp)}</span>
          <span>°</span>
        </div>

        <span className={styles.description}>
          {data.weather[0].description}
        </span>

        {/* <span>{data.weather[0].icon}</span> */}

        <WeatherDetails data={data} />
      </div>
    </>
  )
}
