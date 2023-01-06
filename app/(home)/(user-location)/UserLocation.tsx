'use client'

import { getCityFromClient } from '@/lib/data'
import { CityType } from '@/types/CityType'
import { Card } from '@/ui/card'
import { constructPath } from '@/utils/slugify'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import RequestLocation from './RequestLocation'

export default function UserLocation() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<'denied' | 'fetch' | null>(null)
  const [userCity, setUserCity] = useState<CityType | null>(null)

  const getLocation = () => {
    setLoading(true)
    setError(null)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {
          coords: { latitude, longitude },
        } = position

        getCityFromClient(`lat=${latitude}&lon=${longitude}`)
          .then((data) => {
            setLoading(false)
            setUserCity(data)
          })
          .catch((error) => {
            setLoading(false)
            setError('fetch')
            console.log(error)
          })
      },
      //denied
      () => {
        setLoading(false)
        setError('denied')
      }
    )
  }

  useEffect(() => {
    getLocation()
  }, [])

  return error ? (
    <RequestLocation error={error} getLocation={getLocation} />
  ) : loading ? (
    <section className="mb-4">
      <Card city={undefined} current />
    </section>
  ) : (
    userCity && (
      <section className="mb-4">
        <Link
          href={`/${constructPath(
            userCity.name,
            userCity.sys.country,
            userCity.coord.lat,
            userCity.coord.lon
          )}`}
        >
          <Card city={userCity} current />
        </Link>
      </section>
    )
  )
}
