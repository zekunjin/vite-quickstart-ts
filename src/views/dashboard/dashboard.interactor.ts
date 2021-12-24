import Metadata from '@/decorators/metadata.decorator'
import { createInstance } from '@/utils/metadata'
import AuthController from '@/modules/auth/auth.controller'

@Metadata.Paramtypes(AuthController)
class DashboardInteractor {
  constructor(public auth: AuthController) {}
}

export default createInstance(DashboardInteractor)
