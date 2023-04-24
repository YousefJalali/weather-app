import { ReactNode, useMemo } from 'react'
import { WeatherIcon } from '@/ui/weather-icon'
import { CityType } from '@/types/CityType'
import { ClientSkeleton } from '@/ui/skeleton'
import { getDay, getTimeFromDate } from '@/utils/dateHelpers'
import AddButton from './AddButton'
import Chart from './Chart'
import WeatherDetails from './WeatherDetails'
import Motion from './Motion'

const HEIGHTS = {
  icon: 96,
  name: 68,
  date: 19.5,
  temperature: 60,
  description: 24,
}

function elementsPosition(ele: string, cardOffset: object) {
  switch (ele) {
    case 'ICON':
      return {
        initial: {
          x: cardOffset.x + cardOffset.width - HEIGHTS.icon - 32,
          y:
            cardOffset.y +
            cardOffset.height -
            HEIGHTS.icon -
            24 -
            16 -
            20 -
            12 +
            3,
          left: 0,
          top: 0,
          scale: 80 / HEIGHTS.icon,
        },
        animate: {
          x: 0,
          y: 0,
          left: 'auto',
          top: 'auto',
          scale: 1,
        },
        exit: {
          x: cardOffset.x + cardOffset.width - HEIGHTS.icon - 32,
          y:
            cardOffset.y +
            cardOffset.height -
            HEIGHTS.icon -
            24 -
            16 -
            20 -
            12 +
            3,
          left: 0,
          top: 0,
          scale: 80 / HEIGHTS.icon,
        },
        transition: {
          type: 'spring',
          stiffness: 150,
        },
      }

    case 'NAME':
      return {
        initial: {
          x: cardOffset.x - 24 + 16,
          y:
            cardOffset.y +
            cardOffset.height -
            24 -
            32 -
            16 -
            20 -
            12 -
            48 -
            12 +
            4,
          left: 0,
          top: 0,
          fontSize: '1.25rem',
        },
        animate: {
          x: 0,
          y: HEIGHTS.icon,
          left: 'auto',
          top: 'auto',
          fontSize: '1.5rem',
        },
        exit: {
          x: cardOffset.x - 24 + 16,
          y:
            cardOffset.y +
            cardOffset.height -
            24 -
            32 -
            16 -
            20 -
            12 -
            48 -
            12 +
            4,
          left: 0,
          top: 0,
          fontSize: '1.25rem',
        },
        transition: {
          type: 'spring',
          stiffness: 150,
        },
      }

    case 'DATE':
      return {
        initial: {
          opacity: 0,
          y: HEIGHTS.icon + HEIGHTS.name,
        },
        animate: {
          opacity: 1,
          y: HEIGHTS.icon + HEIGHTS.name,
        },
        exit: {
          opacity: 0,
          y: HEIGHTS.icon + HEIGHTS.name,
        },
        transition: {
          type: 'spring',
          stiffness: 150,
        },
      }

    case 'TEMPERATURE':
      return {
        initial: {
          x: cardOffset.x - 24 + 16,
          y: cardOffset.y + cardOffset.height - 24 - 32 - 20 - 12 - 48 + 4,
          left: 0,
          top: 0,
          fontSize: '3rem',
        },
        animate: {
          x: 0,
          y: HEIGHTS.icon + HEIGHTS.name + HEIGHTS.date,
          left: 'auto',
          top: 'auto',
          fontSize: '3.75rem',
        },
        exit: {
          x: cardOffset.x - 24 + 16,
          y: cardOffset.y + cardOffset.height - 24 - 32 - 20 - 12 - 48 + 4,
          left: 0,
          top: 0,
          fontSize: '3rem',
        },
        transition: {
          type: 'spring',
          stiffness: 150,
        },
      }

    case 'DESCRIPTION':
      return {
        initial: {
          x: cardOffset.x - 24 + 16,
          y: cardOffset.y + cardOffset.height - 24 - 16 - 20,
          left: 0,
          top: 0,
          fontSize: '0.875rem',
        },
        animate: {
          x: 0,
          y: HEIGHTS.icon + HEIGHTS.name + HEIGHTS.date + HEIGHTS.temperature,
          left: 'auto',
          top: 'auto',
        },
        exit: {
          x: cardOffset.x - 24 + 16,
          y: cardOffset.y + cardOffset.height - 24 - 16 - 20,
          left: 0,
          top: 0,
          fontSize: '0.875rem',
        },
        transition: {
          type: 'spring',
          stiffness: 150,
        },
      }
  }
}

export default function CityDetails({
  city,
  forecast,
  queryPath,
  cardOffset,
}: {
  city: CityType | undefined
  queryPath?: string
  forecast?: ReactNode
  cardOffset?: {
    x: number
    y: number
    width: number
    height: number
  }
}) {
  const content = useMemo(
    () => ({
      icon: (city && (
        <WeatherIcon className="h-24 w-24" code={city.weather[0].icon} />
      )) || <ClientSkeleton width={96} height={96} />,
      name: (
        <h1 className="truncate">
          {city?.name || <ClientSkeleton width={64} />}
        </h1>
      ),
      date: (
        <div>
          <span className="text-sm text-content-nonessential">
            {city ? (
              `${getDay(city.dt)} at ${getTimeFromDate(
                city.dt,
                city.timezone,
                true
              )}`
            ) : (
              <ClientSkeleton width={124} />
            )}
          </span>
        </div>
      ),
      temp: (
        <div className="flex font-black text-content-contrast">
          {(city && (
            <>
              <span>{Math.round(city.main.temp)}</span>
              <span className="text-2xl">°</span>
            </>
          )) || <ClientSkeleton width={60} height={60} />}
        </div>
      ),
      description: (
        <span className="text-l block capitalize text-content-nonessential ">
          {city?.weather[0].description || <ClientSkeleton width={96} />}
        </span>
      ),
    }),
    [city]
  )

  // const Wrapper = cardOffset ? <Motion ini/>

  return (
    <>
      {queryPath && <AddButton queryPath={queryPath} />}

      <div className="mt-6 flex w-full flex-col items-center">
        {cardOffset && <div className="h-[298px]" />}

        {cardOffset ? (
          <>
            <Motion
              initial={{
                x: cardOffset.x - 24,
                y: cardOffset.y - 24,
                height: cardOffset.height,
                width: cardOffset.width,
                opacity: 1,
              }}
              animate={{
                x: cardOffset.x - 24,
                y: -72,
                height: '100%',
                width: cardOffset.width + 48,
                // opacity: 0,
              }}
              exit={{
                x: cardOffset.x - 24,
                y: cardOffset.y - 24,
                height: cardOffset.height,
                width: cardOffset.width,
                opacity: 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 150,
              }}
            >
              <div className=" h-full  w-full rounded-xl border-layout-level0accent bg-layout-level1" />
            </Motion>

            <Motion {...elementsPosition('ICON', cardOffset)}>
              {content.icon}
            </Motion>

            <Motion {...elementsPosition('NAME', cardOffset)}>
              {content.name}
            </Motion>

            <Motion {...elementsPosition('DATE', cardOffset)}>
              {content.date}
            </Motion>

            <Motion {...elementsPosition('TEMPERATURE', cardOffset)}>
              {content.temp}
            </Motion>

            <Motion {...elementsPosition('DESCRIPTION', cardOffset)}>
              {content.description}
            </Motion>
          </>
        ) : (
          <>
            {content.icon}
            {content.name}
            {content.date}
            {content.temp}
            {content.description}
          </>
        )}

        <div className="flex w-full flex-col items-center">
          <WeatherDetails data={city} />

          <Chart city={city} />

          {forecast}
        </div>
      </div>
    </>
  )
}
