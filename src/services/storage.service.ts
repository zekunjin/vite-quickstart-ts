import ls from '@/utils/storage'
import { Storage } from '@/constants'
import { setCSSVar, removeCSSVar } from '@/utils/common'

export default class StorageService {
  static getLanguage(): string {
    return ls.get(Storage.LANGUAGE)
  }

  static setLanguage(token: string): void {
    ls.set(Storage.LANGUAGE, token)
  }

  static removeLanguage(): void {
    ls.remove(Storage.LANGUAGE)
  }

  static getPrimaryColor(): string {
    return ls.get(Storage.PRIMARY_COLOR) || ''
  }

  static setPrimaryColor(color: string): void {
    setCSSVar(Storage.PRIMARY_COLOR, color)
    ls.set(Storage.PRIMARY_COLOR, color)
  }

  static removePrimaryColor(): void {
    removeCSSVar(Storage.PRIMARY_COLOR)
    ls.remove(Storage.PRIMARY_COLOR)
  }
}
