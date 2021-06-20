import { reactive } from 'vue'
import i18n from '@/locales'
import { IState, IActions, IModule } from '@/utils/provider'
import { getOSTheme, getCSSVar, getDevice } from '@/utils/common'
import LocalAppService from '@/services/local/app'
import { ZH_CN, BLUE } from '@/constants/index'

export interface IAppState extends IState {
  language: string
  device: string
  colorScheme: string
  primaryColor: string
}

export interface IAppActions extends IActions {
  setLanguage: (locale: string) => void
}

export default (): IModule<IAppState, IAppActions> => {
  const state = reactive({
    language: ZH_CN,
    device: getDevice((e: string) => (state.device = e)),
    colorScheme: getOSTheme((e: string) => (state.colorScheme = e)),
    primaryColor: LocalAppService.getPrimaryColor() || getCSSVar(BLUE)
  })

  const actions = {
    setLanguage(language: string): void {
      LocalAppService.setLanguage(language)
      i18n.setLocale(language)
      state.language = language
    },

    setPrimaryColor(color: string) {
      LocalAppService.setPrimaryColor(color)
      state.primaryColor = color
    }
  }

  actions.setPrimaryColor(state.primaryColor)

  return {
    state,
    actions
  }
}
