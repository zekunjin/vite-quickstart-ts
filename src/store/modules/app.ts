import { reactive } from 'vue'
import i18n from '@/locales'
import { IState, IActions, IModule } from '@/utils/provider'
import { getOSTheme, getCSSVar, getDevice } from '@/utils/common'
import StorageService from '@/services/storage.service'
import { Locale, Color } from '@/constants'

// export interface IAppState extends IState {
//   language: string
//   device: string
//   colorScheme: string
//   primaryColor: string
// }

// export interface IAppActions extends IActions {
//   setLanguage: (locale: string) => void
// }

// export default (): IModule<IAppState, IAppActions> => {
//   const state = reactive({
//     language: Locale.ZH_CN,
//     device: getDevice((e: string) => (state.device = e)),
//     colorScheme: getOSTheme((e: string) => (state.colorScheme = e)),
//     primaryColor:
//       StorageService.getPrimaryColor() ||
//       getCSSVar(Color.BLUE, {
//         element: document.documentElement
//       })
//   })

//   const actions = {
//     setLanguage(language: string): void {
//       StorageService.setLanguage(language)
//       i18n.setLocale(language)
//       state.language = language
//     },

//     setPrimaryColor(color: string) {
//       StorageService.setPrimaryColor(color)
//       state.primaryColor = color
//     }
//   }

//   actions.setPrimaryColor(state.primaryColor)

//   return {
//     state,
//     actions
//   }
// }

const app = {
  state: () => ({
    language: Locale.ZH_CN,
    device: getDevice(),
    colorScheme: getOSTheme(),
    primaryColor:
      StorageService.getPrimaryColor() ||
      getCSSVar(Color.BLUE, {
        element: document.documentElement
      })
  }),

  mutations: {},

  actions: {
    setLanguage() {}
  }
}

export default app
