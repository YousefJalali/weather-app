import { getSuggestions } from '@/lib/data'
import { redirect } from 'next/navigation'

import NoResult from './NoResults'
import SearchResult from './SearchResult'

export default async function Page({
  params,
  searchParams,
}: {
  params: { search: string }
  searchParams: { q: string }
}) {
  if (searchParams.q === '') redirect('/')

  const suggestions = await getSuggestions(searchParams.q)

  return (
    <>
      {suggestions && suggestions.length > 0 && (
        <SearchResult data={suggestions} />
      )}

      {suggestions && suggestions.length <= 0 && (
        <NoResult query={searchParams.q} />
      )}
    </>
  )
}
