interface ICache {
  value: any
  createTime: number
  timeout: number
}

const dataCache = new Map<string, ICache>()

export const Cache = (timeout: number = 1000 * 60 * 5) => (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const func = descriptor.value
  descriptor.value = (...args: any[]) => {
    return new Promise((resolve, reject) => {
      const current = new Date().getTime()
      const cache = dataCache.get(propertyKey) as ICache
      const isTimeout = !cache || cache.createTime + cache.timeout < current
      if (!cache || !cache.value || isTimeout) {
        func(...args)
          .then((res: any) => {
            dataCache.set(propertyKey, {
              value: res,
              createTime: current,
              timeout
            })
            resolve(res)
          })
          .catch((err: any) => {
            dataCache.delete(propertyKey)
            reject(err)
          })
      } else {
        resolve(cache.value)
      }
    })
  }
  return descriptor
}
