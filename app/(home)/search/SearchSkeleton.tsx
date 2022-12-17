import { ClientSkeleton } from '@/ui/skeleton'
import styles from '@/styles/Search.module.css'
import listStyles from '@/styles/List.module.css'

export default function SearchSkeleton() {
  return (
    <ul className={`${listStyles.list} `}>
      {new Array(10).fill(0).map((e, i) => (
        <li key={i} className={styles.search_item}>
          <a>
            <ClientSkeleton width={128} />
          </a>
        </li>
      ))}
    </ul>
  )
}
