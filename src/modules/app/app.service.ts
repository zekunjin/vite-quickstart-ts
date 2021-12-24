import ls from '@/utils/storage'
import { Storage } from '@/constants'
import { setCSSVar } from '@/utils/common'

export default class AppService {
  getPrimaryColor() {
    return ls.get(Storage.PRIMARY_COLOR) || ''
  }

  getLanguage() {
    return ls.get(Storage.LANGUAGE) || ''
  }

  setLanguage(language: string) {
    ls.set(Storage.LANGUAGE, language)
  }

  setPrimaryColor(color: string) {
    setCSSVar(Storage.PRIMARY_COLOR, color)
    ls.set(Storage.PRIMARY_COLOR, color)
  }
}
