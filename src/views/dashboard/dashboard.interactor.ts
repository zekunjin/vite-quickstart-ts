import Metadata from '@/decorators/metadata.decorator'
import { createInstance } from '@/utils/metadata'
import AuthController from '@/modules/auth/auth.controller'
import AuthService from '@/modules/auth/auth.service'

@Metadata.Paramtypes(AuthController)
class DashboardInteractor {
  constructor(public auth: AuthController) {}
}

const a = new AuthService()
const b = new AuthService()
console.log(a === b)
debugger

export default createInstance(DashboardInteractor)
