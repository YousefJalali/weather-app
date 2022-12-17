import { FiSearch } from 'react-icons/fi'
import styles from './Search.module.css'

export function SearchInput({ ...props }) {
  return (
    <div className={styles.search}>
      <label htmlFor='search'>search</label>
      <span>
        <FiSearch />
      </span>
      <input
        id='search'
        name='search'
        type='search'
        placeholder='search'
        {...props}
      />
    </div>
  )
}
