import { App } from 'vue'

interface IFilterModules {
  [key: string]: { (...args: any): string | void }
}

interface IFilters extends IFilterModules {
  install: { (app: App<Element>): void }
}

const modules: IFilterModules = {}
const modulesFiles = import.meta.globEager('./modules/*.ts')

Object.keys(modulesFiles).forEach((modulePath) => {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  modules[moduleName] = modulesFiles[modulePath].default
})

const filters: IFilters = {
  install(app: App<Element>) {
    app.config.globalProperties.$filters = filters
  },
  ...modules
}

export default filters
