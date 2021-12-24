import request from '@/utils/request'
import ls from '@/utils/storage'
import { Storage } from '@/constants'
import Token from '@/decorators/token.decorator'
import Cache from '@/decorators/cache.decorator'

export const LOGIN = '/shuffling/list'

export interface ILoginParams {
  username: string
  password: string
}

export default class AuthService {
  @Token
  @Cache()
  static login(data: ILoginParams) {
    return request({
      url: LOGIN,
      method: 'get',
      params: data
    })
  }

  static getToken(): string {
    return ls.get(Storage.ACCESS_TOKEN)
  }

  static setToken(token: string): void {
    ls.set(Storage.ACCESS_TOKEN, token)
  }

  static removeToken(): void {
    ls.remove(Storage.ACCESS_TOKEN)
  }
}
