import LocalAuthService from '@/services/local/auth'

export const Token = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const func = descriptor.value
  descriptor.value = (...args: any[]) =>
    LocalAuthService.getToken() ? func(...args) : Promise.reject()
  return descriptor
}
