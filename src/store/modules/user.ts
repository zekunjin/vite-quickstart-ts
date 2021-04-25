import { reactive } from 'vue'
import { IStoreModule } from '@/store'
import LocalAuthService from '@/services/local/auth'

export interface IUserState {
  username: string
  avatar?: string
  mobile?: string
}

export interface IUserActions {
  login: Function
  logout: Function
}

export default (): IStoreModule<IUserState, IUserActions> => {
  const state = reactive({
    username: 'DEFAULT'
  })

  const actions = {
    login(): Promise<void> {
      return new Promise((resolve, reject) => {
        state.username = 'AFTER LOGIN USERNAME'
        LocalAuthService.setToken('TOKEN')
        resolve()
      })
    },

    logout() {
      state.username = 'AFTER LOGOUT USERNAME'
      LocalAuthService.removeToken()
    }
  }

  return {
    state,
    actions
  }
}
