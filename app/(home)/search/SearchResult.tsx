import Link from 'next/link'
import { SearchType } from '@/types/SearchType'
import styles from '@/styles/Search.module.css'
import { constructPath } from '@/utils/slugify'
import listStyles from '@/styles/List.module.css'
import Loading from './loading'

export default function SearchResult({ data }: { data: SearchType[] }) {
  return (
    <>
      <ul className={`${listStyles.list} `}>
        {data.map((city) => (
          <li key={city.id} className={styles.search_item}>
            <Link
              href={`/${constructPath(
                city.name,
                city.country_code,
                city.coordinates.lat,
                city.coordinates.lon
              )}`}
            >
              {city.name}, <span>{city.country_name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
