'use client'

import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'
import { FiCheck, FiPlus } from 'react-icons/fi'
import styles from '@/styles/Details.module.css'

export default function AddButton({ city }: { city: string }) {
  const { refresh } = useRouter()
  const [cookie, setCookie] = useCookies(['fav-cities'])

  const existingCookie = cookie['fav-cities'] || []

  const addHandler = () => {
    const updatedCookie = [...existingCookie, city]

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
      JSON.stringify(cookie['fav-cities'].filter((ex: string) => ex !== city)),
      {
        path: '/',
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      }
    )

    refresh()
  }

  return existingCookie.includes(city) ? (
    <button
      className={`${styles.button} ${styles.added}`}
      onClick={removeHandler}
    >
      Added to list
      <FiCheck />
    </button>
  ) : (
    <button className={styles.button} onClick={addHandler}>
      Add to list
      <FiPlus />
    </button>
  )
}
