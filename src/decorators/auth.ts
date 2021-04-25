import LocalAuthService from '@/services/local/auth'

export const Token = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  if (!LocalAuthService.getToken()) {
    descriptor.value = () => Promise.reject()
  }
  return descriptor
}
