import request from '@/utils/request'

export const LOGIN = '/login'

export interface ILoginParams {
  username: string
  password: string
}

export default class AjaxAuthService {
  static login(data: ILoginParams) {
    return request({
      url: LOGIN,
      method: 'post',
      data
    })
  }
}
