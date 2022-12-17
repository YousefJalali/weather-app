import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import styles from '@/styles/Details.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href='/' prefetch>
          <FiArrowLeft />
        </Link>
      </header>

      {children}
    </div>
  )
}
