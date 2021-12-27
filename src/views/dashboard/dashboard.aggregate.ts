import Metadata from '@/decorators/metadata.decorator'
import AuthController from '@/modules/auth/auth.controller'

@Metadata.Paramtypes(AuthController)
class DashboardAggregate {
  constructor(public auth: AuthController) {}
}

export default DashboardAggregate
