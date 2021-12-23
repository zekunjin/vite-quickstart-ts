import { App } from 'vue'

interface FilterModules {
  [key: string]: (...args: any) => string | void
}

const modules: FilterModules = {}
const modulesFiles = import.meta.globEager('./modules/*.ts')

Object.keys(modulesFiles).forEach((modulePath) => {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  modules[moduleName] = modulesFiles[modulePath].default
})

export default {
  install(app: App<Element>) {
    app.config.globalProperties.$filters = modules
  }
}
