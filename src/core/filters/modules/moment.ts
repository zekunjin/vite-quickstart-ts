interface IDateTime {
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
  YYYY: (target: IDateTime) => pad(target.year, 4),
  MM: (target: IDateTime) => pad(target.month),
  DD: (target: IDateTime) => pad(target.day),
  hh: (target: IDateTime) => pad(target.hour),
  mm: (target: IDateTime) => pad(target.minute),
  ss: (target: IDateTime) => pad(target.second)
}

export default (value: string, format: string = 'YYYY/MM/DD hh:mm:ss') => {
  let flag = true
  let result = format
  const tokenRegExp = /YYYY|MM|DD|hh|mm|ss/
  const date = new Date(value)
  const target: IDateTime = {
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
