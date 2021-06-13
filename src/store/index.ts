import app from './modules/app'
import user from './modules/user'

export interface IState {
  [state: string]: any
}

export interface IActions {
  [func: string]: Function
}

export interface IModule<S = IState, A = IActions> {
  state: S
  actions: A
}

export default { app, user }
