import { ReactNode, useMemo } from 'react'
import { WeatherIcon } from '@/ui/weather-icon'
import { CityType } from '@/types/CityType'
import { ClientSkeleton } from '@/ui/skeleton'
import { getDay, getTimeFromDate } from '@/utils/dateHelpers'
import AddButton from './AddButton'
import Chart from './Chart'
import WeatherDetails from './WeatherDetails'

export default function CityDetails({
  city,
  forecast,
  query,
}: {
  city: CityType | undefined
  query?: string
  forecast?: ReactNode
}) {
  const content = useMemo(
    () => ({
      icon: (city && (
        <WeatherIcon className="h-24 w-24" code={city.weather[0].icon} />
      )) || <ClientSkeleton width={96} height={96} />,
      name: (city && city.name) || <ClientSkeleton width={64} />,
      date: (city &&
        `${getDay(city.dt)} at ${getTimeFromDate(
          city.dt,
          city.timezone,
          true
        )}`) || <ClientSkeleton width={124} />,
      temp: (city && (
        <>
          <span>{Math.round(city.main.temp)}</span>
          <span className="text-2xl">°</span>
        </>
      )) || <ClientSkeleton width={60} height={60} />,
      description: (city && city.weather[0].description) || (
        <ClientSkeleton width={96} />
      ),
    }),
    [city]
  )

  return (
    <>
      {query && <AddButton query={query} />}

      <div className="mt-6 flex w-full flex-col items-center">
        {content.icon}

        <div className="mt-8 flex w-full flex-col items-center">
          <h1 className="mb-1 truncate text-2xl">{content.name}</h1>

          <span className="text-sm text-content-nonessential">
            {content.date}
          </span>

          <div className="mt-3 flex text-6xl font-black text-content-contrast">
            {content.temp}
          </div>

          <span className="text-l mt-4 block capitalize text-content-nonessential ">
            {content.description}
          </span>

          <WeatherDetails data={city} />

          <Chart city={city} />

          {forecast}
        </div>
      </div>
    </>
  )
}
