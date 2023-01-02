import fromUnixTime from 'date-fns/fromUnixTime'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import isYesterday from 'date-fns/isYesterday'
import isTomorrow from 'date-fns/isTomorrow'
import intervalToDuration from 'date-fns/intervalToDuration'

export const getDay = (date: Date) =>
  isToday(date)
    ? 'Today'
    : isYesterday(date)
    ? 'Yesterday'
    : isTomorrow(date)
    ? 'Tomorrow'
    : format(date, 'EEEE')

export const getFullDate = (date: Date) => `${getDay(date)}, 
${format(date, 'MMM d - h:m a')}`

export const getDate = (date: Date) => format(date, 'dd MMM')

export const getTime = (date: Date) => format(date, 'hh a')
export const getFullTime = (date: Date) => format(date, 'hh:mm a')

export const formatDate = (date: number, timezone: number, pattern: string) =>
  format(convertDateToTZ(date, timezone), pattern)

export function convertDateToTZ(date: number, timezone: number) {
  return new Date(
    fromUnixTime(date).getUTCFullYear(),
    fromUnixTime(date).getUTCMonth(),
    fromUnixTime(date).getUTCDate(),
    fromUnixTime(date).getUTCHours() + fromUnixTime(timezone).getUTCHours(),
    fromUnixTime(date).getUTCMinutes(),
    fromUnixTime(date).getUTCSeconds()
  )
}

export function duration(start: Date, end: Date) {
  return `${intervalToDuration({ start, end }).hours}:${
    intervalToDuration({ start, end }).minutes
  }`
}
