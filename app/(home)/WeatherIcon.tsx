import * as WeatherIcons from '@/ui/illustrations'

const WeatherIcon = ({
  code,
  height = 5,
  width = 5,
}: {
  code: string
  height?: number
  width?: number
}) => {
  const icon = `Icon${code}`

  //@ts-ignore
  const Icon = WeatherIcons[icon]

  return (
    <div
      className={`h-${height} w-${width} [&>svg]:h-full [&>svg]:w-full [&>svg]:overflow-visible`}
    >
      <Icon />
    </div>
  )
}

export default WeatherIcon
