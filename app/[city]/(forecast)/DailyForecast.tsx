'use client'

import { ForecastItemType } from '@/types/ForecastType'

import { getDate, getDay } from '@/utils/dateHelpers'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import '@reach/accordion/styles.css'
import WeatherIcon from 'app/(home)/WeatherIcon'
import HourlyForecast from './HourlyForecast'

export default function DailyForecast({
  forecast,
}: {
  forecast: (ForecastItemType & { date: string })[][]
}) {
  return (
    <Accordion collapsible className="mt-4 w-full space-y-2">
      {forecast.slice(1).map((day, i) => (
        <AccordionItem key={i} className="rounded-lg bg-layout-level2">
          <h3>
            <AccordionButton className="flex w-full items-center justify-between px-4 py-2">
              <div className="w-full text-left text-sm">
                <span>{getDay(day[0].dt)}</span>

                <span className="block text-xs text-content-subtle">
                  {getDate(day[0].dt)}
                </span>
              </div>

              <div className="w-full font-semibold">
                <span>{Math.round(day[0].main.temp)}°</span>
              </div>

              <div className="flex w-full justify-end">
                <WeatherIcon code={day[0].weather[0].icon} />
              </div>
            </AccordionButton>
          </h3>
          <AccordionPanel className="border-t border-layout-level2accent">
            <HourlyForecast forecast={day.filter((e, i) => i % 2 === 0)} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
