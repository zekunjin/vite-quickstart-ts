import { importEntry } from 'import-html-entry'

export const NOT_LOADED = 'NOT_LOADED'
export const LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE'
export const NOT_BOOTSTRAPPED = 'NOT_BOOTSTRAPPED'
export const BOOTSTRAPPING = 'BOOTSTRAPPING'
export const NOT_MOUNTED = 'NOT_MOUNTED'
export const MOUNTING = 'MOUNTING'
export const MOUNTED = 'MOUNTED'
export const UPDATING = 'UPDATING'
export const UNMOUNTING = 'UNMOUNTING'
export const UNLOADING = 'UNLOADING'
export const LOAD_ERROR = 'LOAD_ERROR'
export const SKIP_BECAUSE_BROKEN = 'SKIP_BECAUSE_BROKEN'

export const applications: IApplication[] = []

export interface IApplication {
  name: string
  entry: string
  container: string
  path: string
  status?: string
}

export const register = (apps: IApplication[]) => {
  apps.forEach((item) => {
    applications.push(Object.assign({}, item, { status: NOT_LOADED }))
    loadApplication(item)
  })
}

export const loadApplication = (app: IApplication) => {
  const { name, entry } = app
  importEntry(entry).then(({ template, execScripts, assetPublicPath }) => {
    const initialAppWrapperElement = createElement(template)
    console.log(initialAppWrapperElement)
  })
}

export const getDefaultTplWrapper = (template: string) =>
  `<div>${template}</div>`

export const createElement = (content: string): HTMLElement | null => {
  const containerElement = document.createElement('div')
  containerElement.innerHTML = getDefaultTplWrapper(content)
  const element = containerElement.firstChild as HTMLElement
  const { innerHTML } = element
  element.innerHTML = ''
  const shadow = element.attachShadow
    ? element.attachShadow({ mode: 'open' })
    : (element as any).createShadowRoot()
  shadow.innerHTML = innerHTML
  return element
}
