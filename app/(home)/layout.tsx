import SearchField from './search/SearchField'
import styles from '@/styles/HomeLayout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <SearchField />
      </header>
      <main className={styles.container}>{children}</main>
    </>
  )
}
