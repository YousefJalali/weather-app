import styles from '@/styles/Details.module.css'

import { ClientSkeleton } from '@/ui/skeleton'

export default function DetailsSkeleton() {
  return (
    <>
      <div className={styles.details}>
        <ClientSkeleton width={91.43 * 1.5} height={84 * 1.5} />

        <div className={styles.title}>
          <h1>
            <ClientSkeleton width={164} />
          </h1>
        </div>
        <div className={styles.temp}>
          <span>
            <ClientSkeleton width={128} />
          </span>
        </div>

        <span className={styles.description}>
          <ClientSkeleton width={64} />
        </span>

        <div className={styles.weather}>
          <div className={styles.weather_item}>
            <div>
              <span>
                <ClientSkeleton width={64} />
              </span>
            </div>
            <span>
              <ClientSkeleton />
            </span>
          </div>

          <div className={styles.weather_item}>
            <div>
              <span>
                <ClientSkeleton width={64} />
              </span>
            </div>
            <span>
              <ClientSkeleton />
            </span>
          </div>

          <div className={styles.weather_item}>
            <div>
              <span>
                <ClientSkeleton width={64} />
              </span>
            </div>
            <span>
              <ClientSkeleton />
            </span>
          </div>

          <div className={styles.weather_item}>
            <div>
              <span>
                <ClientSkeleton width={64} />
              </span>
            </div>
            <span>
              <ClientSkeleton />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
