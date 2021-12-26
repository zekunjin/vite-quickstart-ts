import { Color, Storage } from '@/constants'
import { setCSSVar } from '@/utils/common'
import AppService from '@/modules/app/app.service'
import AppController from '@/modules/app/app.controller'
import colors from './colors'

export default {
  install() {
    const appService = new AppService()
    const appController = new AppController(appService)

    Object.keys(colors).forEach((key: string) => {
      setCSSVar(key, colors[key], { element: document.documentElement })
    })

    setCSSVar(
      Storage.PRIMARY_COLOR,
      appController.primaryColor || colors[Color.BLUE]
    )
  }
}
