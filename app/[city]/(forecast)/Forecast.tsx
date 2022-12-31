import format from 'date-fns/format'

import { getForecast } from '@/lib/data'
import { ForecastType } from '@/types/ForecastType'
import groupBy from 'lodash/groupBy'
import DailyForecast from './DailyForecast'
import HourlyForecast from './HourlyForecast'

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
      <section className="mt-4 w-full rounded-xl bg-layout-level2 ">
        <HourlyForecast forecast={Object.values(group)[0]} />
      </section>
      <DailyForecast forecast={Object.values(group)} />
    </>
  )
}
