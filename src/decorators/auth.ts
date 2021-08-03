import AuthService from '@/services/auth.service'
import { Log } from '@/constants'

export const Token = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const func = descriptor.value
  descriptor.value = (...args: any[]) =>
    AuthService.getToken()
      ? func(...args)
      : Promise.reject(Log.INVALIDATE_TOKEN)
  return descriptor
}
