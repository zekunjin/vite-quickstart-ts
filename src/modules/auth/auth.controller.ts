import Metadata from '@/decorators/metadata.decorator'
import AuthService from './auth.service'

@Metadata.Paramtypes(AuthService)
class AuthController {
  constructor(private readonly authService: AuthService) {}

  login(username: string, password: string) {
    this.authService.login({ username, password })
  }

  getToken() {
    return this.authService.token
  }

  setToken(token: string = '') {
    this.authService.token = token
  }

  logout() {}
}

export default AuthController
