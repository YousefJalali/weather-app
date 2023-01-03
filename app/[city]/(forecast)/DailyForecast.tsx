'use client'

import { ForecastItemType } from '@/types/ForecastType'

import { getDate, getDay } from '@/utils/dateHelpers'

import WeatherIcon from 'app/(home)/WeatherIcon'
import HourlyForecast from './HourlyForecast'
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from '@/ui/accordion'

export default function DailyForecast({
  forecast,
}: {
  forecast: (ForecastItemType & { date: string; timezone: number })[][]
}) {
  return (
    <Accordion className="w-full space-y-2">
      {forecast.slice(1).map((day, i) => (
        <AccordionItem key={i} className="rounded-lg bg-layout-level2">
          <AccordionTitle className="flex w-full items-center justify-between px-4 py-2">
            <div className="w-full text-left text-sm">
              <span>{getDay(day[0].dt)}</span>

              <span className="block text-xs text-content-subtle">
                {getDate(day[0].dt)}
              </span>
            </div>

            <div className="flex space-x-3">
              <div className="w-full text-center font-semibold">
                <span>{Math.round(day[0].main.temp)}°</span>
              </div>

              <div className=" w-full">
                <WeatherIcon code={day[0].weather[0].icon} />
              </div>
            </div>
          </AccordionTitle>

          <AccordionContent className="bg-layout-level3">
            <HourlyForecast forecast={day.filter((e, i) => i % 2 === 0)} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
