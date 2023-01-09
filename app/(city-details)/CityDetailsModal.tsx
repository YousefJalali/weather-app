'use client'

import { CityType } from '@/types/CityType'
import { Modal } from '@/ui/modal'
import CityDetails from 'app/(city-details)/CityDetails'
import { ReactNode, useEffect, useState } from 'react'
import { getCityFromClient } from '@/lib/data'
import { getFetchQuery } from '@/utils/queryHelpers'

export default function CityDetailsModal({
  children,
  city,
  queryPath,
  forecast,
}: {
  children: ReactNode
  city: CityType | undefined
  queryPath: string
  forecast?: ReactNode
}) {
  const [modal, showModal] = useState(false)
  const [cityData, setCityData] = useState(city)

  const fetchCity = async () => {
    const fetchQuery = getFetchQuery(queryPath)

    const data: CityType = await getCityFromClient(fetchQuery)

    setCityData(data)
  }

  useEffect(() => {
    if (!city) {
      fetchCity()
    }
  }, [city])

  const openHandler = () => {
    showModal(true)
    // router.push(path, undefined, { shallow: true })
    window.history.replaceState(
      { ...window.history.state, as: '/', url: queryPath },
      '',
      queryPath
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
          <CityDetails
            city={cityData}
            forecast={forecast}
            queryPath={queryPath}
          />
        </Modal>
      )}
    </>
  )
}
