import AuthService from '@/services/auth.service'

export const Token = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const func = descriptor.value
  descriptor.value = (...args: any[]) =>
    AuthService.getToken() ? func(...args) : Promise.reject()
  return descriptor
}
