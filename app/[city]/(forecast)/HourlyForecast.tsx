import { ForecastItemType } from '@/types/ForecastType'
import { getTime } from '@/utils/dateHelpers'
import WeatherIcon from 'app/(home)/WeatherIcon'

export default function HourlyForecast({
  forecast,
}: {
  forecast: (ForecastItemType & { date: string })[]
}) {
  return (
    <ul className="flex w-full justify-between p-4">
      {forecast.map((hourly) => (
        <li key={hourly.dt} className="flex flex-col items-center space-y-2">
          <span className="text-xs text-content-subtle">
            {getTime(hourly.dt)}
          </span>

          <WeatherIcon code={hourly.weather[0].icon} />

          <span>{Math.round(hourly.main.temp)}°</span>
        </li>
      ))}
    </ul>
  )
}
