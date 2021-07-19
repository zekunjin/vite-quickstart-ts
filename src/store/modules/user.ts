import { reactive } from 'vue'
import { IState, IActions, IModule } from '@/utils/provider'
import AuthService from '@/services/auth.service'

export interface IUserState extends IState {
  username: string
  avatar?: string
  mobile?: string
}

export interface IUserActions extends IActions {
  login: () => Promise<void>
  logout: () => void
}

export default (): IModule<IUserState, IUserActions> => {
  const state = reactive({
    username: 'DEFAULT'
  })

  const actions = {
    login(): Promise<void> {
      return new Promise((resolve, reject) => {
        state.username = 'AFTER LOGIN USERNAME'
        AuthService.setToken('TOKEN')
        resolve()
      })
    },

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
