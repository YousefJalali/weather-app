'use client'

import styles from '@/styles/UserLocation.module.css'
import { IoLocationSharp } from 'react-icons/io5'

export default function RequestLocation() {
  return (
    <section className={styles.request_location}>
      <div className={styles.illustration}>
        <IoLocationSharp />
      </div>

      <div className={styles.description}>
        <span>Enable Geolocation</span>
        <span>
          Enable geolocation so you can get the weather in your current location
        </span>
      </div>
    </section>
  )
}
