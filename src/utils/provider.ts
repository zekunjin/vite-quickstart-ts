import { provide, inject } from 'vue'

export interface FunctionalStore<T> {
  token?: symbol
  (): T
}

export const useProvide = <T>(func: FunctionalStore<T>) => {
  !func.token && (func.token = Symbol())
  const value = func()
  provide(func.token, value)
  return value
}

export const useInject = <T>(func: FunctionalStore<T>) => {
  if (func.token) {
    return inject(func.token) as T
  } else {
    throw new Error()
  }
}
