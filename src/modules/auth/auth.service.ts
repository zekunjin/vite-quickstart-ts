import request from '@/utils/request'
import ls from '@/utils/storage'
import { Storage } from '@/constants'
import { LoginDto } from './dto/login.dto'
import Singleton from '@/decorators/singleton.decorator'

@Singleton
class AuthService {
  static LOGIN = ''

  get token() {
    return ls.get(Storage.ACCESS_TOKEN)
  }

  set token(token: string) {
    ls.set(Storage.ACCESS_TOKEN, token)
  }

  login(data: LoginDto) {
    return request({
      url: AuthService.LOGIN,
      method: 'get',
      params: data
    })
  }

  removeToken(): void {
    ls.remove(Storage.ACCESS_TOKEN)
  }
}

export default AuthService
