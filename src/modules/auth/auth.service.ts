import request from '@/utils/request'
import ls from '@/utils/storage'
import { Storage } from '@/constants'
import { LoginDto } from './dto/login.dto'

class AuthService {
  static LOGIN = ''

  login(data: LoginDto) {
    return request({
      url: AuthService.LOGIN,
      method: 'get',
      params: data
    })
  }

  getToken(): string {
    return ls.get(Storage.ACCESS_TOKEN)
  }

  setToken(token: string): void {
    ls.set(Storage.ACCESS_TOKEN, token)
  }

  removeToken(): void {
    ls.remove(Storage.ACCESS_TOKEN)
  }
}

export default AuthService
