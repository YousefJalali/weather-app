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
      className="bg-white text-gray-400 hover:text-gray-900 focus:ring-gray-300 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 -mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2"
      data-dismiss-target="#toast-interactive"
      aria-label="Close"
      onClick={addHandler}
    >
      <span className="sr-only">Close</span>
      <FiX className="h-5 w-5" />
    </button>
  )
}
