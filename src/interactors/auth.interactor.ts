import AuthService, { ILoginParams } from '@/services/auth.service'

export default class AuthInteractor {
  public rules = {
    login: {}
  }

  constructor() {}

  static async login(params: ILoginParams) {
    try {
      const { data } = await AuthService.login(params)
      return data.token
    } catch (err) {
      throw new Error(err)
    }
  }

  static refreshToken(key: string) {}
}
