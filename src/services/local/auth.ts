import ls from '@/utils/storage'
import { ACCESS_TOKEN } from '@/store/mutation-types'

export default class LocalAuthService {
  static getToken(): string {
    return ls.get(ACCESS_TOKEN)
  }

  static setToken(token: string): void {
    ls.set(ACCESS_TOKEN, token)
  }

  static removeToken(): void {
    ls.remove(ACCESS_TOKEN)
  }
}
