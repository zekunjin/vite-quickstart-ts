import { reactive } from 'vue'
import { IState, IActions, IModule } from '@/utils/provider'
import AuthService from '@/services/auth.service'

export interface IUserState extends IState {
  username: string
  avatar?: string
  mobile?: string
}

export interface IUserActions extends IActions {
  logout: () => void
}

export default (): IModule<IUserState, IUserActions> => {
  const state = reactive({
    username: 'DEFAULT'
  })

  const actions = {
    logout() {
      state.username = 'AFTER LOGOUT USERNAME'
      AuthService.removeToken()
    }
  }

  return {
    state,
    actions
  }
}
