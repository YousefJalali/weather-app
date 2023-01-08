import { WeatherIcon } from '@/ui/weather-icon'
import AddButton from './AddButton'
import Chart from './Chart'
import WeatherDetails from './WeatherDetails'
import { CityType } from '@/types/CityType'
import { getDay, getTimeFromDate } from '@/utils/dateHelpers'
import { ReactNode } from 'react'

export default function CityDetails({
  city,
  forecast,
  query,
}: {
  city: CityType
  query: string
  forecast?: ReactNode
}) {
  return (
    <>
      <AddButton query={query} />

      <div className="mt-6 flex w-full flex-col items-center">
        <WeatherIcon className="h-24 w-24" code={city.weather[0].icon} />

        <div className="mt-8 flex w-full flex-col items-center">
          <h1 className="mb-1 truncate text-2xl">{city.name}</h1>

          <span className="text-sm text-content-nonessential">
            {getDay(city.dt)} at {getTimeFromDate(city.dt, city.timezone, true)}
          </span>

          <div className="mt-3 flex text-6xl font-black text-content-contrast">
            <span>{Math.round(city.main.temp)}</span>
            <span className="text-2xl">°</span>
          </div>

          <span className="text-l mt-4 block capitalize text-content-nonessential ">
            {city.weather[0].description}
          </span>

          <WeatherDetails data={city} />

          <Chart
            dt={city.dt}
            sunrise={city.sys.sunrise}
            sunset={city.sys.sunset}
            timezone={city.timezone}
            code={city.weather[0].icon}
          />

          {forecast}
        </div>
      </div>
    </>
  )
}
