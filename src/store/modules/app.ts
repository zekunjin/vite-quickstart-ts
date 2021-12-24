import { Module } from 'vuex'
import { RootState } from '@/store'
import i18n from '@/locales'
import { Locale, Color } from '@/constants'
import { getOSTheme, getCSSVar, getDevice } from '@/utils/common'
import AppController from '@/modules/app/app.controller'
import { createInstance } from '@/utils/metadata'

export interface IAppState {
  language: string
  device: string
  colorScheme: string
  primaryColor: string
}

const instance = createInstance(AppController)

const app: Module<IAppState, RootState> = {
  namespaced: true,

  state: () => ({
    language: Locale.ZH_CN,
    device: getDevice(),
    colorScheme: getOSTheme(),
    primaryColor:
      instance.primaryColor ||
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
      instance.setLanguage(language)
      i18n.setLocale(language)
      commit('SET_LANGUAGE', language)
    },

    setPrimaryColor({ commit }, color: string) {
      instance.setPrimaryColor(color)
      commit('SET_PRIMARY_COLOR', color)
    }
  }
}

export default app
