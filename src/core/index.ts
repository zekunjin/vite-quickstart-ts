import { App } from 'vue'
import filters from './filters'
import theme from './theme'
import monitor from './monitor'

export default {
  install(app: App<Element>) {
    filters.install(app)
    theme.install(app)
    monitor.install(app)
  }
}
