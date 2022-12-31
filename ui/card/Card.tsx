import { CityType } from '@/types/CityType'
import { FiNavigation, FiTrendingUp } from 'react-icons/fi'
import WeatherIcon from 'app/(home)/WeatherIcon'

function Tag({
  current = false,
  popular = false,
}: {
  current?: boolean
  popular?: boolean
}) {
  return (
    <div className="font-hairline mb-3 flex text-xs leading-none text-brand-primary">
      <span className="mr-1">{current ? 'CURRENT LOCATION' : 'POPULAR'}</span>

      {current ? <FiNavigation /> : <FiTrendingUp />}
    </div>
  )
}

export function Card({
  city,
  current = false,
  popular = false,
}: {
  city: CityType
  current?: boolean
  popular?: boolean
}) {
  return (
    <div className="rounded-xl border border-layout-level0accent bg-layout-level1 p-4">
      {current || popular ? <Tag current={current} popular={popular} /> : null}

      <div className="mb-3 flex justify-between text-content-contrast">
        <div className="max-w-[calc(100%-5rem)]">
          <span className="mb-3 block truncate text-xl font-semibold leading-tight">
            {city.name}
          </span>

          <div className="flex text-4xl leading-none">
            <span className="text-5xl font-bold ">
              {Math.round(city.main.temp)}
            </span>
            <span className="text-2xl">°</span>
          </div>
        </div>

        <WeatherIcon className="h-20 w-20" code={city.weather[0].icon} />
      </div>

      <div className="flex justify-between text-sm">
        <span className="capitalize text-content-subtle">
          {city.weather[0].description}
        </span>

        <span>
          L: {Math.round(city.main.temp_min)}° H:
          {Math.round(city.main.temp_max)}°
        </span>
      </div>
    </div>
  )
}
