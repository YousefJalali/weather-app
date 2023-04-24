'use client'

import { CityType } from '@/types/CityType'
import { Modal } from '@/ui/modal'
import CityDetails from 'app/(city-details)/CityDetails'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
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
  const [cardOffset, setCardOffset] = useState<{
    x: number
    y: number
    width: number
    height: number
  }>()

  const ref = useRef<HTMLDivElement>(null)

  const fetchCity = async () => {
    setCityData(await getCityFromClient(getFetchQuery(queryPath)))
  }

  useEffect(() => {
    if (!city && modal) {
      fetchCity()
    }
  }, [city, modal])

  const toggleHandler = useCallback(
    (status: 'close' | 'open') => {
      if (ref.current) {
        setCardOffset({
          x: ref.current.getBoundingClientRect().left,
          y: ref.current.getBoundingClientRect().top,
          width: ref.current.getBoundingClientRect().width,
          height: ref.current.getBoundingClientRect().height,
        })
      }

      showModal(status === 'open' ? true : false)

      window.history.replaceState(
        {
          ...window.history.state,
          as: '/',
          url: status === 'open' ? queryPath : '/',
        },
        '',
        status === 'open' ? queryPath : '/'
      )
    },
    [queryPath]
  )

  return (
    <>
      <a onClick={() => toggleHandler('open')}>
        <div ref={ref}>{children}</div>
      </a>

      <Modal modal={modal} clearModal={() => toggleHandler('close')}>
        <CityDetails
          city={cityData}
          forecast={forecast}
          queryPath={queryPath}
          cardOffset={cardOffset}
        />
      </Modal>
    </>
  )
}
