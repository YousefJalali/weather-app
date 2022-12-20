import Search from './(search)/Search'
import styles from '@/styles/HomeLayout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Search />
      </header>
      <main className={styles.container}>{children}</main>
    </>
  )
}
