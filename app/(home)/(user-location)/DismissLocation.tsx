'use client'

import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'
import { FiX } from 'react-icons/fi'

export default function DismissLocation() {
  const { refresh } = useRouter()

  const [, setCookie] = useCookies(['user-location'])

  const addHandler = () => {
    setCookie('user-location', JSON.stringify('dismissed'), {
      path: '/',
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    })

    refresh()
  }

  return (
    <button
      type="button"
      className="-mx-2 -my-2 ml-auto h-fit w-fit rounded-full bg-transparent p-2 text-content-contrast transition-all hover:bg-layout-level1accent focus:ring-2"
      aria-label="Close"
      onClick={addHandler}
    >
      <span className="sr-only">Close</span>
      <FiX className="h-4 w-4" />
    </button>
  )
}
