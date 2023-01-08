'use client'

import { CityType } from '@/types/CityType'
import { Card } from '@/ui/card'
import { Modal } from '@/ui/modal'
import { constructPath } from '@/utils/slugify'
import CityDetails from 'app/(city-details)/CityDetails'
import { ReactNode, useState } from 'react'

export default function CityItem({
  city,
  tag,
  forecast,
}: {
  city: CityType
  tag: boolean
  forecast?: ReactNode
}) {
  const [modal, showModal] = useState(false)

  const path = `/${constructPath(
    city.name,
    city.sys.country,
    city.coord.lat,
    city.coord.lon
  )}`

  const openHandler = () => {
    showModal(true)
    // router.push(path, undefined, { shallow: true })
    window.history.replaceState(
      { ...window.history.state, as: '/', url: path },
      '',
      path
    )
  }

  const closeHandler = () => {
    showModal(false)

    window.history.replaceState(
      { ...window.history.state, as: '/', url: '/' },
      '',
      '/'
    )
  }

  return (
    <>
      <a onClick={openHandler}>
        <Card city={city} popular={tag} />
      </a>

      {modal && (
        <Modal clearModal={closeHandler}>
          <CityDetails city={city} forecast={forecast} query={path} />
        </Modal>
      )}
    </>
  )
}
