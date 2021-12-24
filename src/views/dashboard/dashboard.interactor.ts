import AuthService from '@/modules/auth/auth.service'
import AuthController from '@/modules/auth/auth.controller'

class DashboardInteractor {
  constructor(public auth: AuthController) {}
}

const authService = new AuthService()
const authController = new AuthController(authService)
const dashboardInteractor = new DashboardInteractor(authController)

export default dashboardInteractor
