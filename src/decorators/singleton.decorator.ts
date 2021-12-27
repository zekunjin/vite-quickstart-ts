const Singleton = <T extends { new (...args: any[]): {} }>(target: T) => {
  return class extends target {
    private _interface

    constructor(...args: any) {
      super(...args)
      if (!this._interface) {
        this._interface = Reflect.construct(target, args)
      }
    }

    get() {
      return this._interface || this
    }
  }
}

export default Singleton
