import { App } from 'vue'

export default {
  install(app: App<Element>) {
    app.config.errorHandler = (err) => {
      console.error(err)
    }

    app.config.warnHandler = (msg) => {
      console.warn(msg)
    }
  }
}
