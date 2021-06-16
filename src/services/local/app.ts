import ls from '@/utils/storage'
import { LANGUAGE, PRIMARY_COLOR } from '@/constants'
import { setCSSVar, removeCSSVar } from '@/utils/common'

export default class LocalAppService {
  static getLanguage(): string {
    return ls.get(LANGUAGE)
  }

  static setLanguage(token: string): void {
    ls.set(LANGUAGE, token)
  }

  static removeLanguage(): void {
    ls.remove(LANGUAGE)
  }

  static getPrimaryColor(): string {
    return ls.get(PRIMARY_COLOR) || ''
  }

  static setPrimaryColor(color: string): void {
    setCSSVar(PRIMARY_COLOR, color)
    ls.set(PRIMARY_COLOR, color)
  }

  static removePrimaryColor(): void {
    removeCSSVar(PRIMARY_COLOR)
    ls.remove(PRIMARY_COLOR)
  }
}
