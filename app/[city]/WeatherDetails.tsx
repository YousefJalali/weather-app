import { TbTemperature } from 'react-icons/tb'
import { FiEye } from 'react-icons/fi'
import { IoWaterOutline } from 'react-icons/io5'
import { TbGauge } from 'react-icons/tb'
import { CityType } from '@/types/CityType'
import styles from '@/styles/Details.module.css'

export default function WeatherDetails({ data }: { data: CityType }) {
  return (
    <div className={styles.weather}>
      <div className={styles.weather_item}>
        <div>
          <TbTemperature />
          <span>feels like</span>
        </div>
        <span>{Math.round(data.main.feels_like)}°</span>
      </div>

      <div className={styles.weather_item}>
        <div>
          <IoWaterOutline />
          <span>humidity</span>
        </div>
        <span>{Math.round(data.main.humidity)}%</span>
      </div>

      <div className={styles.weather_item}>
        <div>
          <FiEye />
          <span>visibility</span>
        </div>
        <span>{Math.round(data.visibility / 1000)} km</span>
      </div>

      <div className={styles.weather_item}>
        <div>
          <TbGauge />
          <span>pressure</span>
        </div>
        <span>{Math.round(data.main.pressure)} hPa</span>
      </div>
    </div>
  )
}
