import Module from '@/decorators/module.decorator'
import AuthController from '@/modules/auth/auth.controller'
import AuthService from '@/services/auth.service'

@Module({
  controllers: [AuthController],
  services: [AuthService]
})
class AuthModule {
  constructor(public auth: AuthController) {}
}
