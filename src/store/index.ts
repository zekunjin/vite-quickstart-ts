import { createStore } from 'vuex'
import getters from './getters'
import user, { IUserState } from './modules/user'

export interface RootState {
  user: IUserState
}

const modules = { user }

const store = createStore({
  modules,
  getters
})

export default store
