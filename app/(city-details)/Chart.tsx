'use client'

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  // ReferenceDot,
  ReferenceLine,
  Label,
} from 'recharts'
import { getTimeFromDate } from '@/utils/dateHelpers'
import { sortBy } from 'lodash'
// import { WeatherIcon } from '@/ui/weather-icon/'
import { CityType } from '@/types/CityType'
import { ClientSkeleton } from '@/ui/skeleton'

// const CustomizedDot = ({
//   viewBox,
//   code,
// }: {
//   viewBox: { x: number; y: number }
//   code: string
// }) => {
//   const { x, y } = viewBox

//   return (
//     <WeatherIcon
//       x={x}
//       y={y}
//       width={32}
//       height={32}
//       // viewBox="15 11 26 26"
//       iconOnly
//       code={code}
//     />
//   )
// }

export default function Chart({ city }: { city: CityType | undefined }) {
  const data = sortBy(
    [
      { name: 'start', x: 0, y: -6 },
      { name: 'sunrise', x: 6, y: 0 },
      { name: 'afternoon', x: 12, y: 12 },
      { name: 'sunset', x: 18, y: 0 },
      { name: 'end', x: 24, y: -6 },
    ],
    'x'
  )

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.y))
    const dataMin = Math.min(...data.map((i) => i.y))

    if (dataMax <= 0) {
      return 0
    }
    if (dataMin >= 0) {
      return 1
    }

    return dataMax / (dataMax - dataMin)
  }

  const off = gradientOffset()

  return (
    <div className="mt-4 h-fit w-full rounded-xl bg-layout-level2 p-4 pt-6 pb-0">
      <div className="h-32">
        {(city && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={300} height={100} data={data}>
              {['sunset', 'sunrise'].map((ele) => (
                <ReferenceLine
                  key={ele}
                  className=" stroke-layout-divider"
                  strokeDasharray="3 3"
                  segment={[
                    { x: ele === 'sunset' ? 18 : 6, y: 6 },
                    { x: ele === 'sunset' ? 18 : 6, y: 0 },
                  ]}
                >
                  <Label
                    value={ele}
                    offset={24}
                    position="top"
                    className="stroke-content-nonessential text-xs font-thin capitalize "
                  />
                  <Label
                    value={getTimeFromDate(
                      ele === 'sunset' ? city.sys.sunset : city.sys.sunrise,
                      city.timezone,
                      true
                    )}
                    offset={6}
                    position="top"
                    className="stroke-content-default text-xs font-thin tracking-wider"
                  />
                </ReferenceLine>
              ))}

              <XAxis dataKey="x" hide />
              <YAxis dataKey="y" type="number" domain={[-12, 12]} hide />

              <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset={0} stopColor="#FFAC32" stopOpacity={1} />
                  <stop offset={off} stopColor="#FFAC32" stopOpacity={0} />
                  <stop offset={off} stopColor="#48484A" stopOpacity={0} />
                  <stop offset={1} stopColor="#48484A" stopOpacity={1} />
                </linearGradient>
              </defs>
              <Area
                isAnimationActive={false}
                type="monotone"
                dataKey="y"
                strokeWidth={1}
                fill="url(#splitColor)"
                stroke="#eee"
              />

              {/* Reference weather icon */}
              {/* <XAxis xAxisId="main" domain={[0, 24]} type="number" hide />
              <ReferenceDot
                xAxisId="main"
                x={dateToNumber(city.dt, city.timezone)}
                y={
                  dateToNumber(city.dt, city.timezone) > 6 &&
                  dateToNumber(city.dt, city.timezone) < 18
                    ? dateToNumber(city.dt, city.timezone)
                    : -dateToNumber(city.dt, city.timezone)
                }
                label={({ viewBox }) => (
                  <CustomizedDot
                    viewBox={viewBox}
                    code={city.weather[0].icon}
                  />
                )}
                className="[&>circle]:fill-transparent [&>circle]:stroke-0"
              /> */}
            </AreaChart>
          </ResponsiveContainer>
        )) || <ClientSkeleton />}
      </div>
    </div>
  )
}
