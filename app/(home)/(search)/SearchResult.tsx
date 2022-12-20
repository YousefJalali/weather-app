import Link from 'next/link'
import { SearchRecordType, SearchType } from '@/types/SearchType'
import styles from '@/styles/Search.module.css'
import { constructPath } from '@/utils/slugify'
import listStyles from '@/styles/List.module.css'

export default function SearchResult({
  data,
  query,
}: {
  data: SearchRecordType
  query: string
}) {
  return (
    <ul className={`${listStyles.list} `}>
      {data.map((city) => {
        const name = `${city.fields.ascii_name}, ${city.fields.cou_name_en}`

        const displayName = name.replace(
          new RegExp(query, 'gi'),
          (match) => `<mark>${match}</mark>`
        )

        return (
          <li key={city.recordid} className={styles.search_item}>
            <Link
              href={`/${constructPath(
                city.fields.name,
                city.fields.country_code,
                city.fields.coordinates[0],
                city.fields.coordinates[1]
              )}`}
            >
              <span dangerouslySetInnerHTML={{ __html: displayName }}></span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
