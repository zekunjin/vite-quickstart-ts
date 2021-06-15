import { reactive } from 'vue'
import { IState, IActions, IModule } from '@/store'
import i18n from '@/locales'
import { ZH_CN } from '@/constants/index'
import { getOSTheme } from '@/utils/common'
import LocalAppService from '@/services/local/app'

export interface IAppState extends IState {
  language: string
}

export interface IAppActions extends IActions {
  setLanguage: { (locale: string): void }
  setTheme: { (theme: string): void }
}

export default (): IModule<IAppState, IAppActions> => {
  const state = reactive({
    language: ZH_CN,
    theme: getOSTheme()
  })

  const actions = {
    setLanguage(language: string): void {
      LocalAppService.setLanguage(language)
      i18n.setLocale(language)
    },

    setTheme(theme: string): void {
      state.theme = theme
    }
  }

  return {
    state,
    actions
  }
}
