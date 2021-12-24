const providerMap = new Map()

export const useProvive = <T extends { new (...args: any[]): {} }>(
  constructor: T
) => {
  class Mixin extends constructor {
    constructor(...args: any[]) {
      debugger
      super(...args)
    }
  }

  providerMap.set(constructor, Mixin)

  return Mixin
}
