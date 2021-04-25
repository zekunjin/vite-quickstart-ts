import request from '@/utils/request'
import { Token } from '@/decorators/auth'

export const LOGIN = '/login'

export interface ILoginParams {
  username: string
  password: string
}

export default class AjaxAuthService {
  @Token
  static login(data: ILoginParams) {
    return request({
      url: LOGIN,
      method: 'post',
      data
    })
  }
}
