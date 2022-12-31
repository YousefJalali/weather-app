import fromUnixTime from 'date-fns/fromUnixTime'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import isYesterday from 'date-fns/isYesterday'
import isTomorrow from 'date-fns/isTomorrow'

export const getDay = (date: number) =>
  isToday(fromUnixTime(date))
    ? 'Today'
    : isYesterday(fromUnixTime(date))
    ? 'Yesterday'
    : isTomorrow(fromUnixTime(date))
    ? 'Tomorrow'
    : format(fromUnixTime(date), 'EEEE')

export const getFullDate = (date: number) => `${getDay(date)}, 
${format(fromUnixTime(date), 'MMM d h:m a')}`

export const getDate = (date: number) => format(fromUnixTime(date), 'dd MMM')

export const getTime = (date: number) => format(fromUnixTime(date), 'hh a')
