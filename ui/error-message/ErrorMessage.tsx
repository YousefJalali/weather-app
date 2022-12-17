import styles from './ErrorMessage.module.css'
import Image from 'next/image'

export function ErrorMessage() {
  return (
    <div className={styles.container}>
      <Image
        src={`/empty.svg`}
        alt='Page not found'
        width={1100.02}
        height={811.41}
      />

      <div className={styles.message}>
        <span>Something went wrong!</span>
        <span>An error has occurred while fetching the data</span>
      </div>
    </div>
  )
}
