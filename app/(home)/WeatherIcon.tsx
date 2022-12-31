import * as WeatherIcons from '@/ui/illustrations'

const WeatherIcon = ({
  code,
  className,
}: {
  code: string
  className?: string
}) => {
  const icon = `Icon${code}`

  //@ts-ignore
  const Icon = WeatherIcons[icon]

  return (
    <div
      className={`h-5 w-5 [&>svg]:h-full [&>svg]:w-full [&>svg]:overflow-visible ${
        className ? className : ''
      }`}
    >
      <Icon />
    </div>
  )
}

export default WeatherIcon
