import colors from './colors'
import { setCSSVar } from '@/utils/common'

export default {
  install() {
    Object.keys(colors).forEach((key: string) => {
      setCSSVar(key, colors[key])
    })
  }
}
