import styles from './Spinner.module.css'

export function Spinner() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
      <span className={styles.text}>Please wait...</span>
    </div>
  )
}
