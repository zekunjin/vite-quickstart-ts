import { App } from '@vue/runtime-dom'
import colors from './colors'
import { setCSSVar } from '@/utils/common'

export default {
  install(app?: App<Element>) {
    Object.keys(colors).forEach((key: string) => {
      setCSSVar(key, colors[key], { element: document.documentElement })
    })
  }
}
