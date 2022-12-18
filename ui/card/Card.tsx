import Image from 'next/image'
import styles from './Card.module.css'
import { CityType } from '@/types/CityType'
import { FiNavigation, FiTrendingUp } from 'react-icons/fi'

export function Card({
  city,
  current = false,
  popular = false,
}: {
  city: CityType
  current?: boolean
  popular?: boolean
}) {
  return (
    <div
      className={styles.card}
      style={{ height: current || popular ? 177.7 + 24.45 : 177.7 }}
    >
      {current && (
        <div className={styles.current}>
          <span>CURRENT LOCATION</span>

          <FiNavigation />
        </div>
      )}

      {popular && (
        <div className={styles.current}>
          <span>POPULAR</span>

          <FiTrendingUp />
        </div>
      )}

      <div className={styles.wrapper}>
        <div>
          <span className={styles.title}>{city.name}</span>
          <div className={styles.temp}>
            <span>{Math.round(city.main.temp)}</span>
            <span>°</span>
          </div>
        </div>

        <Image
          src={`/${city.weather[0].icon}.svg`}
          alt={city.weather[0].main}
          width={91.43}
          height={84}
        ></Image>
      </div>

      <div className={`${styles.wrapper} ${styles.details}`}>
        <span>{city.weather[0].description}</span>
        <span>
          L: {Math.round(city.main.temp_min)}° H:
          {Math.round(city.main.temp_max)}°
        </span>
      </div>
    </div>
  )
}
