import { Module } from 'vuex'
import { RootState } from '@/store'
import i18n from '@/locales'
import { Locale, Color } from '@/constants'
import { getOSTheme, getCSSVar, getDevice } from '@/utils/common'
import AppService from '@/modules/app/app.service'
import AppController from '@/modules/app/app.controller'

export interface IAppState {
  language: string
  device: string
  colorScheme: string
  primaryColor: string
}

const appService = new AppService()
const appController = new AppController(appService)

const app: Module<IAppState, RootState> = {
  namespaced: true,

  state: () => ({
    language: Locale.ZH_CN,
    device: getDevice(),
    colorScheme: getOSTheme(),
    primaryColor:
      appController.primaryColor ||
      getCSSVar(Color.BLUE, {
        element: document.documentElement
      })
  }),

  mutations: {
    SET_LANGUAGE(state, language) {
      state.language = language
    },

    SET_PRIMARY_COLOR(state, color) {
      state.primaryColor = color
    }
  },

  actions: {
    setLanguage({ commit }, language: string) {
      appController.setLanguage(language)
      i18n.setLocale(language)
      commit('SET_LANGUAGE', language)
    },

    setPrimaryColor({ commit }, color: string) {
      appController.setPrimaryColor(color)
      commit('SET_PRIMARY_COLOR', color)
    }
  }
}

export default app
