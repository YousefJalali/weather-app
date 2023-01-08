'use client'

import { CityType } from '@/types/CityType'
import { Modal } from '@/ui/modal'
import CityDetails from 'app/(city-details)/CityDetails'
import { ReactNode, useState } from 'react'

export default function CityDetailsModal({
  children,
  city,
  query,
  forecast,
}: {
  children: ReactNode
  city: CityType
  query: string
  forecast?: ReactNode
}) {
  const [modal, showModal] = useState(false)

  // const path = `/${constructPath(
  //   city.name,
  //   city.sys.country,
  //   city.coord.lat,
  //   city.coord.lon
  // )}`

  const openHandler = () => {
    showModal(true)
    // router.push(path, undefined, { shallow: true })
    window.history.replaceState(
      { ...window.history.state, as: '/', url: query },
      '',
      query
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
      <a onClick={openHandler}>{children}</a>

      {modal && (
        <Modal clearModal={closeHandler}>
          <CityDetails city={city} forecast={forecast} query={query} />
        </Modal>
      )}
    </>
  )
}
