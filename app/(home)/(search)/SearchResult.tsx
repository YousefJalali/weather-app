import Link from 'next/link'
import { SearchRecordType } from '@/types/SearchType'
import CityDetailsModal from 'app/(city-details)/CityDetailsModal'
import { getQueryPath } from '@/utils/queryHelpers'

export default function SearchResult({
  data,
  query,
}: {
  data: SearchRecordType[]
  query: string
}) {
  return (
    <ul className="divide-y divide-layout-level0accent">
      {data.map((city) => {
        const name = `${city.fields.ascii_name}, ${city.fields.cou_name_en}`

        const displayName = name.replace(
          new RegExp(query, 'gi'),
          (match) => `<mark class='text-content-contrast'>${match}</mark>`
        )

        const queryPath = getQueryPath({
          city: city.fields.name,
          countryCode: city.fields.country_code,
          lat: city.fields.coordinates[0],
          lon: city.fields.coordinates[1],
        })

        return (
          <li
            key={city.recordid}
            className="cursor-pointer px-2 hover:bg-layout-level0accent active:bg-layout-level1accent"
          >
            <CityDetailsModal city={undefined} queryPath={queryPath}>
              <span
                className="block truncate py-4 text-content-nonessential"
                dangerouslySetInnerHTML={{ __html: displayName }}
              ></span>
            </CityDetailsModal>

            {/* </Link> */}
          </li>
        )
      })}
    </ul>
  )
}
