import { Color, Storage } from '@/constants'
import { setCSSVar } from '@/utils/common'
import StorageService from '@/services/storage.service'
import colors from './colors'

export default {
  install() {
    Object.keys(colors).forEach((key: string) => {
      setCSSVar(key, colors[key], { element: document.documentElement })
    })

    setCSSVar(
      Storage.PRIMARY_COLOR,
      StorageService.getPrimaryColor() || colors[Color.BLUE]
    )
  }
}
