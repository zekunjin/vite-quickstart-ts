import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import app, { IAppState } from './modules/app'
import user, { IUserState } from './modules/user'

export interface RootState {}

export interface State {
  app: IAppState
  user: IUserState
}

export const key: InjectionKey<Store<State>> = Symbol()

export const useStore = () => baseUseStore(key)

const store = createStore({
  modules: {
    app,
    user
  }
})

export default store
