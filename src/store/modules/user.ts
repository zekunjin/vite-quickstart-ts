import { reactive } from 'vue'
import { IStoreModule } from '@/store'

export interface IUserState {
  username: string
  avatar?: string
  mobile?: string
}

export interface IUserActions {
  login: Function
}

export default (): IStoreModule<IUserState, IUserActions> => {
  const state = reactive({
    username: 'DEFAULT'
  })

  const actions = {
    login(): Promise<void> {
      return new Promise((resolve, reject) => {
        state.username = 'AFTER LOGIN USERNAME'
        resolve()
      })
    }
  }

  return {
    state,
    actions
  }
}
