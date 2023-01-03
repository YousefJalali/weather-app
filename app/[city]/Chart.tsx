'use client'

import {
  LineChart,
  Line,
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Bar,
  ReferenceDot,
  ReferenceLine,
  Label,
} from 'recharts'
import {
  convertDateToTZ,
  dateToNumber,
  duration,
  getTimeFromDate,
} from '@/utils/dateHelpers'

export default function Chart({
  dt,
  sunset,
  sunrise,
  timezone,
}: {
  dt: number
  sunset: number
  sunrise: number
  timezone: number
}) {
  const sunriseTime = dateToNumber(sunrise, timezone)
  const sunsetTime = dateToNumber(sunset, timezone)
  const currentTime = dateToNumber(dt, timezone)

  // console.log({ sunriseTime }, { sunsetTime }, { currentTime })

  const data = [
    { name: 'start', x: 0, y: 0 },
    { name: 'sunrise', x: sunriseTime, y: 12 },
    { name: 'afternoon', x: 12, y: 24 },
    { name: 'sunset', x: sunsetTime, y: 12 },
    { name: 'end', x: 24, y: 0 },
  ]

  return (
    <div className="mt-4 h-fit w-full rounded-xl bg-layout-level2 p-4">
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data}>
            {['sunset', 'sunrise'].map((ele) => (
              <ReferenceLine
                key={ele}
                className=" stroke-layout-divider"
                strokeDasharray="3 3"
                segment={[
                  { x: ele === 'sunset' ? sunsetTime : sunriseTime, y: 18 },
                  { x: ele === 'sunset' ? sunsetTime : sunriseTime, y: 12 },
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
                    ele === 'sunset' ? sunset : sunrise,
                    timezone,
                    true
                  )}
                  offset={6}
                  position="top"
                  className="stroke-content-default text-sm font-thin tracking-wider"
                />
              </ReferenceLine>
            ))}

            <ReferenceLine
              y={12}
              label="HORIZON"
              strokeWidth={3}
              className=" [&>*]:stroke-layout-level1accent [&>text]:stroke-brand-primary"
            />

            <ReferenceDot x="current" y={currentTime} label="MAX" />

            <XAxis dataKey="x" hide />
            <YAxis dataKey="y" hide />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="y"
              className="[&>*]:stroke-layout-level3accent"
              // className="[&>*]:stroke-brand-primary [&>*]:drop-shadow-glow"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>

          {/* <AreaChart width={730} height={250} data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5297FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#5297FF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" hide />
            <YAxis dataKey="y" hide />

            <Tooltip />

            {['sunset', 'sunrise'].map((ele) => (
              <ReferenceLine
                key={ele}
                className=" stroke-layout-divider"
                strokeDasharray="3 3"
                segment={[
                  { x: ele, y: 0 },
                  { x: ele, y: 10 },
                ]}
              >
                <Label
                  value={ele}
                  offset={4}
                  position="top"
                  className="text-xs font-thin"
                />
              </ReferenceLine>
            ))}

            <ReferenceLine
              y={0}
              label="HORIZON"
              className="stroke-layout-divider"
            />

            <Area
              type="monotone"
              dataKey="y"
              className="  stroke-brand-primary"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart> */}
        </ResponsiveContainer>
      </div>

      <div className="mt-2 flex justify-between">
        <div className="space-x-1 text-sm text-content-subtle">
          <span>Day length:</span>
          <span className="text-content-default">
            {duration(
              convertDateToTZ(sunset, timezone),
              convertDateToTZ(sunrise, timezone)
            )}
          </span>
        </div>

        <div className="space-x-1 text-sm text-content-subtle">
          <span>Remaining daylight:</span>
          <span className="text-content-default">
            {duration(
              convertDateToTZ(sunset, timezone),
              convertDateToTZ(dt, timezone)
            )}
          </span>
        </div>
      </div>
    </div>
  )
}
