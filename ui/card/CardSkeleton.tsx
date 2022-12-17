import styles from './Card.module.css'
import { ClientSkeleton } from '@/ui/skeleton'

export function CardSkeleton({ current = false }: { current?: boolean }) {
  return (
    <div
      className={styles.card}
      style={{ height: current ? 172 + 24.45 : 172 }}
    >
      {current && (
        <div className={styles.current}>
          <span>
            <ClientSkeleton width={64} />
          </span>
        </div>
      )}

      <div className={styles.wrapper}>
        <div>
          <span className={styles.title}>
            <ClientSkeleton width={128} />
          </span>
          <div className={styles.temp}>
            <span>
              <ClientSkeleton width={128} />
            </span>
          </div>
        </div>

        <ClientSkeleton height={84} width={91.43} />
      </div>

      <div className={`${styles.wrapper} ${styles.details}`}>
        <span>
          <ClientSkeleton width={128} />
        </span>
        <span>
          <ClientSkeleton width={128} />
        </span>
      </div>
    </div>
  )
}
