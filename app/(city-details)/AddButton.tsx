'use client'

import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'
import { FiBookmark } from 'react-icons/fi'

function Button({ isAdded = false, ...props }) {
  const style = isAdded ? 'fill-utility-rating text-utility-rating' : ''
  return (
    <button className="absolute top-0 right-0" {...props}>
      <FiBookmark className={`h-6 w-6 ${style}`} />
    </button>
  )
}

export default function AddButton({ query }: { query: string }) {
  const { refresh } = useRouter()

  const [cookie, setCookie] = useCookies(['fav-cities'])

  const existingCookie = cookie['fav-cities'] || []

  const addHandler = () => {
    const updatedCookie = [...existingCookie, query]

    setCookie('fav-cities', JSON.stringify(updatedCookie), {
      path: '/',
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    })

    refresh()
  }

  const removeHandler = () => {
    setCookie(
      'fav-cities',
      JSON.stringify(cookie['fav-cities'].filter((ex: string) => ex !== query)),
      {
        path: '/',
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      }
    )

    refresh()
  }

  return existingCookie.includes(query) ? (
    <Button isAdded onClick={removeHandler} />
  ) : (
    <Button onClick={addHandler} />
  )
}
