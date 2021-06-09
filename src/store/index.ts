import user from './modules/user'

export interface IState {
  [state: string]: any
}

export interface IActions {
  [func: string]: Function
}

export interface IModule<S = IState, A = IActions> {
  state: S
  actions: A
}

// export interface IStore {
//   [key: string]: FunctionalStore<IModule>
// }

// const modules: IStore = {}
// const modulesFiles = import.meta.globEager('./modules/*.ts')

// Object.keys(modulesFiles).forEach((modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
//   modules[moduleName] = modulesFiles[modulePath].default
// })

export default { user }
