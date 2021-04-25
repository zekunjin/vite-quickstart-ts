import LocalAuthService from '@/services/local/auth'

export const Token = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const func = descriptor.value
  descriptor.value = () =>
    LocalAuthService.getToken() ? func() : Promise.reject()
  return descriptor
}
