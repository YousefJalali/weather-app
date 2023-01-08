import { TbTemperature } from 'react-icons/tb'
import { FiEye } from 'react-icons/fi'
import { IoWaterOutline } from 'react-icons/io5'
import { TbGauge } from 'react-icons/tb'
import { CityType } from '@/types/CityType'
import { ClientSkeleton } from '@/ui/skeleton'

function WeatherItem({
  icon,
  title,
  value,
}: {
  icon: JSX.Element
  title: string
  value: string | undefined
}) {
  return (
    <div className="rounded-xl bg-layout-level2 p-4">
      <div className="mb-2 flex items-center text-sm text-content-subtle">
        {(value && icon) || <ClientSkeleton />}
        <span className="ml-1 uppercase">
          {(value && title) || <ClientSkeleton />}
        </span>
      </div>
      <span className="text-2xl">{value || <ClientSkeleton />}</span>
    </div>
  )
}

export default function WeatherDetails({
  data,
}: {
  data: CityType | undefined
}) {
  return (
    <div className="mt-6 grid w-full grid-cols-2 gap-4">
      <WeatherItem
        icon={<TbTemperature />}
        title="feels like"
        value={data ? `${Math.round(data.main.feels_like)}°` : undefined}
      />

      <WeatherItem
        icon={<IoWaterOutline />}
        title="humidity"
        value={data ? `${Math.round(data.main.humidity)}%` : undefined}
      />

      <WeatherItem
        icon={<FiEye />}
        title="visibility"
        value={data ? `${Math.round(data.visibility / 1000)} km` : undefined}
      />

      <WeatherItem
        icon={<TbGauge />}
        title="pressure"
        value={data ? `${Math.round(data.main.pressure)} hPa` : undefined}
      />
    </div>
  )
}
