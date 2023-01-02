import { ForecastItemType } from '@/types/ForecastType'
import { convertDateToTZ, getTime } from '@/utils/dateHelpers'
import WeatherIcon from 'app/(home)/WeatherIcon'

export default function HourlyForecast({
  forecast,
}: {
  forecast: (ForecastItemType & { date: string; timezone: number })[]
}) {
  const align =
    forecast.length > 2 ? 'justify-between' : '[&>li]:mr-[calc(12rem/4)]'

  return (
    <ul className={`flex w-full p-4 ${align}`}>
      {forecast.map((hourly) => (
        <li
          key={hourly.dt}
          className="flex w-12 flex-col items-center space-y-2"
        >
          <span className="text-xs text-content-subtle">
            {getTime(convertDateToTZ(hourly.dt, hourly.timezone))}
          </span>

          <WeatherIcon code={hourly.weather[0].icon} />

          <span>{Math.round(hourly.main.temp)}°</span>
        </li>
      ))}
    </ul>
  )
}
