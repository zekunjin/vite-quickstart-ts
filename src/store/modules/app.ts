import { Module } from 'vuex'
import { RootState } from '@/store'
import i18n from '@/locales'
import { Locale, Color } from '@/constants'
import { getOSTheme, getCSSVar, getDevice } from '@/utils/common'
import StorageService from '@/services/storage.service'

export interface IAppState {
  language: string
  device: string
  colorScheme: string
  primaryColor: string
}

const app: Module<IAppState, RootState> = {
  namespaced: true,

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
      StorageService.setLanguage(language)
      i18n.setLocale(language)
      commit('SET_LANGUAGE', language)
    },

    setPrimaryColor({ commit }, color: string) {
      StorageService.setPrimaryColor(color)
      commit('SET_PRIMARY_COLOR', color)
    }
  }
}

export default app
