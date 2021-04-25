import user from './modules/user'

export interface IStoreModule<S, A = { [func: string]: Function }> {
  state: S
  actions?: A
}

export { user }
