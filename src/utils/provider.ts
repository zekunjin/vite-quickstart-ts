import { provide, inject } from 'vue'

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

export interface IFunctionalStore<T> {
  token?: symbol
  (): T
}

export const useProvide = <T>(func: IFunctionalStore<T>) => {
  !func.token && (func.token = Symbol())
  const value = func()
  provide(func.token, value)
  return value
}

export const useInject = <T>(func: IFunctionalStore<T>) => {
  if (func.token) {
    return inject(func.token) as T
  } else {
    throw new Error()
  }
}
