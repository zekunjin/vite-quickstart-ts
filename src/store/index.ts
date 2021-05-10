import user from './modules/user'

export interface IState {
  [state: string]: any
}

export interface IActions {
  [func: string]: Function
}

export interface IStoreModule<S = IState, A = IActions> {
  state: S
  actions: A
}

export { user }
