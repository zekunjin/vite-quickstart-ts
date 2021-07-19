import { Display, Theme } from '@/constants'
import { between } from './lodash'

interface ICSSVarOptions {
  element: HTMLElement
}

const HTMLBody: HTMLElement = document.body
const deviceOptions: { [key: string]: number[] } = {
  [Display.MOBILE]: [0, 576],
  [Display.TABLET]: [576, 1200],
  [Display.DESKTOP]: [1200, Infinity]
}

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
    if (e.matches) cb && cb(Theme.DARK)
  }
  const handleLightMqlChange = (e: MediaQueryListEvent) => {
    if (e.matches) cb && cb(Theme.LIGHT)
  }
  if (cb && darkMql.addEventListener) {
    darkMql.addEventListener('change', handleDarkMqlChange)
    lightMql.addEventListener('change', handleLightMqlChange)
  }
  return darkMql.matches ? Theme.DARK : Theme.LIGHT
}

export const getDevice = (cb?: Function): string => {
  const width = document.body.clientWidth
  const device = Object.keys(deviceOptions).find((key: string) => {
    return between(width, deviceOptions[key])
  })
  if (cb) {
    window.onresize = () => cb(getDevice())
  }
  return device || ''
}

export const setCSSVar = (
  key: string,
  value: string,
  options?: ICSSVarOptions
): void => {
  const { element = HTMLBody } = options || {}
  element.style.setProperty(`--${key}`, value)
}

export const getCSSVar = (key: string, options?: ICSSVarOptions): string => {
  const { element = HTMLBody } = options || {}
  return element.style.getPropertyValue(`--${key}`).trim()
}

export const removeCSSVar = (key: string, options?: ICSSVarOptions): void => {
  const { element = HTMLBody } = options || {}
  element.style.removeProperty(`--${key}`)
}
