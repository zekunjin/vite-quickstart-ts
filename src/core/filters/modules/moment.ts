interface IDate {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
  millisecond: number
}

const pad = (str: string | number, length: number = 2) => {
  let result = String(str)
  while (result.length < length) {
    result = '0' + result
  }
  return result
}

const parser: { [func: string]: Function } = {
  YYYY: (target: IDate) => pad(target.year, 4),
  MM: (target: IDate) => pad(target.month),
  DD: (target: IDate) => pad(target.day),
  hh: (target: IDate) => pad(target.hour),
  mm: (target: IDate) => pad(target.minute),
  ss: (target: IDate) => pad(target.second)
}

export default (value: string, format: string = 'YYYY/MM/DD hh:mm:ss') => {
  let flag = true
  let result = format
  const tokenRegExp = /YYYY|MM|DD|hh|mm|ss/
  const date = new Date(value)
  const target: IDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds()
  }
  while (flag) {
    flag = false
    result = result.replace(tokenRegExp, (matched) => {
      flag = true
      return parser[matched](target)
    })
  }
  return result
}
