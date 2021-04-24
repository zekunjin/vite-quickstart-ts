import user from './modules/user'

export interface IStoreModule<S, A> {
  state: S
  actions?: A
}

export { user }
