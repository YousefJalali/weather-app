import format from 'date-fns/format'

import { getForecast } from '@/lib/data'
import { ForecastType } from '@/types/ForecastType'
import groupBy from 'lodash/groupBy'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'
import { ReactNode } from 'react'
import { IoCalendarOutline } from 'react-icons/io5'
import { FiCalendar, FiClock } from 'react-icons/fi'

const Card = ({
  title,
  children,
  className = '',
  icon,
}: {
  title: string
  children: ReactNode
  className?: string
  icon: ReactNode
}) => (
  <section
    className={`mt-4 w-full rounded-xl bg-layout-level2 pb-2 ${className}`}
  >
    <h3 className="mb-2 flex border-b border-layout-level2accent px-4 pt-4 pb-2 text-xs uppercase leading-none text-content-subtle">
      <span className="mr-1 inline-block">{icon}</span>
      {title}
    </h3>
    {children}
  </section>
)

export default async function Forecast({
  coords,
}: {
  coords: { lat: string; lon: string }
}) {
  const data: ForecastType = await getForecast(coords)

  const group = groupBy(
    data.list.map((e) => ({
      ...e,
      date: format(new Date(e.dt_txt), 'dd/MM/yyyy'),
    })),
    'date'
  )

  return (
    <>
      <Card title="Hourly forecast" className="[&>ul]:py-2" icon={<FiClock />}>
        <HourlyForecast forecast={Object.values(group)[0]} />
      </Card>

      <Card title="5-day forecast" icon={<IoCalendarOutline />}>
        <DailyForecast forecast={Object.values(group)} />
      </Card>
    </>
  )
}
