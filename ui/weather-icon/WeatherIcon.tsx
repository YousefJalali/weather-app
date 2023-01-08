import * as WeatherIcons from '@/ui/illustrations'
import { SVGProps } from 'react'

export const WeatherIcon = ({
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
      className={`[&>svg]:h-full [&>svg]:w-full [&>svg]:overflow-visible ${
        className ? className : 'h-5 w-5'
      }`}
    >
      <Icon />
    </div>
  )
}
