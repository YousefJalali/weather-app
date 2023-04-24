import { CityType } from '@/types/CityType'
import { FiNavigation, FiTrendingUp } from 'react-icons/fi'
import { WeatherIcon } from '@/ui/weather-icon'
import { ClientSkeleton } from '../skeleton'

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
  city: CityType | undefined
  current?: boolean
  popular?: boolean
}) {
  const name = city?.name || <ClientSkeleton width={128} />

  const temp = (city && (
    <>
      <span className="text-5xl font-bold ">{Math.round(city.main.temp)}</span>
      <span className="text-2xl">°</span>
    </>
  )) || <ClientSkeleton width={48} height={48} />

  const icon = (city && (
    <WeatherIcon className="h-20 w-20" code={city?.weather[0].icon} />
  )) || <ClientSkeleton width={80} height={80} />

  const description = city?.weather[0].description || (
    <ClientSkeleton width={128} />
  )

  const lowHighTemp = (city && (
    <>
      L: {Math.round(city.main.temp_min)}° H:
      {Math.round(city.main.temp_max)}°
    </>
  )) || <ClientSkeleton width={128} />

  return (
    <div className="cursor-pointer select-none rounded-xl bg-layout-level1 p-4 ring-2 ring-layout-level0accent transition-all ease-in hover:ring-offset-4 active:scale-95">
      {!city ? (
        <ClientSkeleton width={64} />
      ) : current || popular ? (
        <Tag current={current} popular={popular} />
      ) : null}

      <div className="mb-3 flex justify-between text-content-contrast">
        <div className="max-w-[calc(100%-5rem)]">
          <span className="mb-3 block truncate text-xl font-semibold leading-tight">
            {name}
          </span>

          <div className="flex text-4xl leading-none">{temp}</div>
        </div>

        {icon}
      </div>

      <div className="flex justify-between text-sm">
        <span className="capitalize text-content-subtle">{description}</span>

        <span>{lowHighTemp}</span>
      </div>
    </div>
  )
}
