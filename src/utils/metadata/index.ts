import { reactive } from 'vue'

const _providerMap = new Map()

export const useProvide = (target: any, key: string, ...args: any[]) => {
  !target.token && (target.token = Symbol())
  _providerMap.set(target.token, { [key]: args })
}

export const useInject = (target: any) => {
  return _providerMap.get(target.token)
}

export const createInstance = <T>(constructor: {
  new (...args: any[]): T
}): T => {
  const { paramtypes } = useInject(constructor) || {}

  const paramInstances = paramtypes?.map((v: any) => {
    if (useInject(v)?.paramtypes?.length > 0) {
      return createInstance(v)
    } else {
      return new v()
    }
  })

  return new constructor(...paramInstances)
}

export const useAggregate = <T>(constructor: {
  new (...args: any[]): T
}): T => {
  const instance = createInstance(constructor)
  return reactive(instance as any)
}
