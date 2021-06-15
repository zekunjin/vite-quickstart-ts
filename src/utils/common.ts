import { DARK, LIGHT } from '@/constants'

export const optionalChaining = (
  obj: { [key: string]: any },
  ...rest: string[]
): any => {
  let tmp = obj
  for (const key in rest) {
    const name = rest[key]
    tmp = tmp?.[name]
  }
  return tmp
}

export const getOSTheme = (): string => {
  const darkMql = window.matchMedia('(prefers-color-scheme: dark)')
  return darkMql.matches ? DARK : LIGHT
}
