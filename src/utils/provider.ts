import { provide, inject } from 'vue'

const KEY = 'functional store'

export interface FunctionalStore<T> {
  token?: symbol
  (): T
}

export const useProvide = <T>(func: FunctionalStore<T>) => {
  !func.token && (func.token = Symbol(KEY))
  const value = func()
  provide(func.token, value)
  return value
}

export const useInject = () => {}
