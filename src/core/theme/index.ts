import { Color, Storage } from '@/constants'
import { setCSSVar } from '@/utils/common'
import colors from './colors'
import AppService from '@/modules/app/app.service'

export default {
  install() {
    Object.keys(colors).forEach((key: string) => {
      setCSSVar(key, colors[key], { element: document.documentElement })
    })

    setCSSVar(
      Storage.PRIMARY_COLOR,
      new AppService().getPrimaryColor() || colors[Color.BLUE]
    )
  }
}
