import fromUnixTime from 'date-fns/fromUnixTime'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import isYesterday from 'date-fns/isYesterday'
import isTomorrow from 'date-fns/isTomorrow'
import intervalToDuration from 'date-fns/intervalToDuration'
import addHours from 'date-fns/addHours'
import secondsToHours from 'date-fns/secondsToHours'

const addZero = (number: number) => (number > 9 ? number : `0${number}`)
const convert12to24 = (hours: number) =>
  hours === 12 || hours === 0 ? 12 : hours < 12 ? hours : hours - 12

export const getDay = (date: number) =>
  isToday(fromUnixTime(date))
    ? 'Today'
    : isYesterday(fromUnixTime(date))
    ? 'Yesterday'
    : isTomorrow(fromUnixTime(date))
    ? 'Tomorrow'
    : format(fromUnixTime(date), 'EEEE')

const formatTime = (time: string, withMinutes = false) => {
  const hours = +time.split(':')[0]
  const minutes = +time.split(':')[1]
  const e = hours === 0 || hours < 12 ? 'AM' : 'PM'

  return `${addZero(convert12to24(hours))}${
    (withMinutes && `:${addZero(minutes)}`) || ''
  } ${e}`
}

export const getTimeFromTxt = (dt_txt: string, withMinutes = false) =>
  formatTime(dt_txt.split(' ')[1].substring(0, 5), withMinutes)

export const getTimeFromDate = (
  date: number,
  timezone: number,
  withMinutes = false
) =>
  formatTime(
    addHours(fromUnixTime(date), secondsToHours(timezone))
      .toUTCString()
      .split(' ')[4],
    withMinutes
  )

export const getDate = (date: number) => format(fromUnixTime(date), 'dd MMM')

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

export function dateToNumber(date: number, timezone: number) {
  const time = getTimeFromDate(date, timezone, true)
  const hours = +time.split(' ')[0].split(':')[0]
  const minutes = +time.split(' ')[0].split(':')[1]
  const e = time.split(' ')[1] === 'AM' ? 0 : 12

  return +(hours + e + minutes / 60).toFixed(2)
}
