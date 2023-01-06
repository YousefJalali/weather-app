import { ClientSkeleton } from '@/ui/skeleton'

export default function SearchSkeleton() {
  return (
    <ul
      className="divide-y divide-layout-level0accent"
      data-test="search-loading"
    >
      {new Array(10).fill(0).map((e, i) => (
        <li key={i} className="py-4">
          <a>
            <ClientSkeleton width={128} />
          </a>
        </li>
      ))}
    </ul>
  )
}
