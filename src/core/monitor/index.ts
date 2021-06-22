import { App } from 'vue'

export default {
  install(app: App<Element>) {
    app.config.errorHandler = (err, vm, info) => {
      console.log(`error: ${err}`)
      console.log(`vm: ${vm}`)
      console.log(`info: ${info}`)
    }
  }
}
