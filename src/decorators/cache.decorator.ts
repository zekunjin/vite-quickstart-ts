interface ICacheItem {
  value: any
  createTime: number
  timeout: number
}

export interface IRequestOptions {
  refresh: boolean
}

const dataCache = new Map<string, ICacheItem>()

const Cache =
  (timeout: number = 1000 * 60) =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const func: Function = descriptor.value
    descriptor.value = (params: any): Promise<any> => {
      return new Promise((resolve, reject) => {
        const current = new Date().getTime()
        const key = JSON.stringify({ propertyKey, params })
        const cache = dataCache.get(key) as ICacheItem
        const isTimeout = !cache || cache.createTime + cache.timeout < current
        if (!cache || !cache.value || isTimeout) {
          func(params)
            .then((res: any) => {
              dataCache.set(key, {
                value: res,
                createTime: current,
                timeout
              })
              resolve(res)
            })
            .catch((err: any) => {
              dataCache.delete(key)
              reject(err)
            })
        } else {
          resolve(cache.value)
        }
      })
    }
    return descriptor
  }

export default Cache
