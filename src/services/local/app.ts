import ls from '@/utils/storage'
import { LANGUAGE } from '@/constants'

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
}
