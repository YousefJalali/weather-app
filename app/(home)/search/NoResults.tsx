import { FiSearch } from 'react-icons/fi'
import styles from '@/styles/Search.module.css'

export default function NoResult({ query }: { query: string }) {
  return (
    <div className={styles.no_result}>
      <span>
        <FiSearch />
      </span>
      <span>No results</span>
      <span>No results found for “{query}”</span>
    </div>
  )
}
