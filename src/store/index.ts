import { FunctionalStore } from '@/utils/provider'

const modules: { [key: string]: IStoreModule } = {}
const modulesFiles = import.meta.globEager('./modules/*.ts')

for (const modulePath in modulesFiles) {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  modules[moduleName] = modulesFiles[modulePath].default as IStoreModule
}

export interface IState {
  [state: string]: any
}

export interface IActions {
  [func: string]: Function
}

export interface IStoreModule<S = IState, A = IActions>
  extends FunctionalStore<IStoreModule> {
  state: S
  actions: A
}

export default modules
