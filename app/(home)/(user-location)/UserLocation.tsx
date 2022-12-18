'use client'

import { getCityFromClient } from '@/lib/data'
import styles from '@/styles/UserLocation.module.css'
import { CityType } from '@/types/CityType'
import { Card, CardSkeleton } from '@/ui/card'
import { constructPath } from '@/utils/slugify'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import RequestLocation from './RequestLocation'

export default function UserLocation() {
  const [loading, setLoading] = useState(true)
  const [geolocationState, setGeolocationState] = useState<
    'granted' | 'denied'
  >('denied')

  const [userCity, setUserCity] = useState<CityType | null>(null)

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then((res) => {
      if (res.state === 'granted') {
        setGeolocationState('granted')
      } else {
        setLoading(false)
        setGeolocationState('denied')
      }
    })
  }, [])

  useEffect(() => {
    if (geolocationState === 'granted') {
      const geolocationAPI = navigator.geolocation

      if (!geolocationAPI) {
        throw new Error('geolocation API failed!')
      }

      geolocationAPI.getCurrentPosition(
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
            })
        },
        (error) => {
          throw new Error('Something went wrong getting your position!')
        }
      )
    }
  }, [geolocationState])

  return loading ? (
    <section className={styles.container}>
      <CardSkeleton current />
    </section>
  ) : geolocationState === 'granted' ? (
    userCity && (
      <section className={styles.container}>
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
  ) : (
    <RequestLocation />
  )
}
