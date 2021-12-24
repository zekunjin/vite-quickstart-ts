import { createInstance } from '@/utils/metadata'
import { Color, Storage } from '@/constants'
import { setCSSVar } from '@/utils/common'
import AppController from '@/modules/app/app.controller'
import colors from './colors'

export default {
  install() {
    const instance = createInstance(AppController)

    Object.keys(colors).forEach((key: string) => {
      setCSSVar(key, colors[key], { element: document.documentElement })
    })

    setCSSVar(
      Storage.PRIMARY_COLOR,
      instance.primaryColor || colors[Color.BLUE]
    )
  }
}
