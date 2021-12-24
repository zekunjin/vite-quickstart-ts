import AuthService from './auth.service'

class AuthController {
  constructor(private readonly authService: AuthService) {}

  login(username: string, password: string) {
    this.authService.login({ username, password })
  }

  logout() {}
}

export default AuthController
