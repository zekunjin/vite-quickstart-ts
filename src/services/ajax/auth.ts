import request from '@/utils/request'
import { Token } from '@/decorators/auth'
import { Cache, IRequestOptions } from '@/decorators/ajax'

export const LOGIN = '/shuffling/list'

export interface ILoginParams {
  username: string
  password: string
}

export default class AjaxAuthService {
  @Token
  @Cache()
  static login(data: ILoginParams, options?: IRequestOptions) {
    return request({
      url: LOGIN,
      method: 'get',
      params: data
    })
  }
}
