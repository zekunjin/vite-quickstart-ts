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

export const getOSTheme = (cb?: Function): string => {
  const darkMql = window.matchMedia('(prefers-color-scheme: dark)')
  const lightMql = window.matchMedia('(prefers-color-scheme: light)')
  const handleDarkMqlChange = (e: MediaQueryListEvent) => {
    if (e.matches) cb && cb(DARK)
  }
  const handleLightMqlChange = (e: MediaQueryListEvent) => {
    if (e.matches) cb && cb(LIGHT)
  }
  if (cb && darkMql.addEventListener) {
    darkMql.addEventListener('change', handleDarkMqlChange)
    lightMql.addEventListener('change', handleLightMqlChange)
  }
  return darkMql.matches ? DARK : LIGHT
}
