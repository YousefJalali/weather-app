import * as WeatherIcons from '@/ui/illustrations'
import { SVGProps } from 'react'

const WeatherIcon = ({
  code,
  className,
  iconOnly,
  ...props
}: {
  code: string
  className?: string
  iconOnly?: boolean
} & SVGProps<SVGElement>) => {
  const icon = `Icon${code}`

  //@ts-ignore
  const Icon = WeatherIcons[icon]

  return iconOnly ? (
    <Icon {...props} />
  ) : (
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
