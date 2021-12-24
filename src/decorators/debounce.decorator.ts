const Debounce =
  (interval: number = 5000) =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    let handle: number
    const func = descriptor.value as Function
    descriptor.value = (...args: any) => {
      clearTimeout(handle)
      handle = window.setTimeout(() => func(args), interval)
    }
    return descriptor
  }

export default Debounce
