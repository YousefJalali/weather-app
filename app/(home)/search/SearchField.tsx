'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from 'usehooks-ts'
import styles from '@/styles/Search.module.css'
import { SearchInput } from '@/ui/search-input'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SearchField() {
  const searchParams = useSearchParams()

  const [query, setQuery] = useState(searchParams.get('q') || '')

  const router = useRouter()

  const debouncedValue = useDebounce<string>(query, 500)

  useEffect(() => {
    if (debouncedValue.length > 0) {
      router.push(`/search?q=${debouncedValue}`)
    }
  }, [debouncedValue])

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const cancelHandler = () => {
    setQuery('')
    router.push('/')
  }

  const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      cancelHandler()
    }
  }

  return (
    <div className={styles.search_input}>
      <SearchInput
        value={query}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      {query.length > 0 && <button onClick={cancelHandler}>cancel</button>}
    </div>
  )
}
