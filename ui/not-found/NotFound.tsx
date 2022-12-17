import Link from 'next/link'
import styles from './NotFound.module.css'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'

export function NotFound() {
  return (
    <div className={styles.container}>
      <Image
        src={`/404.svg`}
        alt='Page not found'
        width={860.13137}
        height={571.14799}
      />

      <div className={styles.message}>
        <span>City not found</span>
        <span>The city you&apos;re looking for does not seem to exist</span>
      </div>

      <div className={styles.button}>
        <FiArrowLeft />
        <Link href='/'>Go Home</Link>
      </div>
    </div>
  )
}
