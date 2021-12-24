import { useProvive } from '@/utils/injector'

const Injectable =
  () =>
  <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return useProvive(constructor)
    // return constructor
  }

export default Injectable
