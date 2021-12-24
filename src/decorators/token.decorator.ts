import ls from '@/utils/storage'
import { Log, Storage } from '@/constants'

const Token = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const func = descriptor.value
  descriptor.value = (...args: any[]) =>
    ls.get(Storage.ACCESS_TOKEN)
      ? func(...args)
      : Promise.reject(Log.INVALIDATE_TOKEN)
  return descriptor
}

export default Token
