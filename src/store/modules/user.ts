import { Module } from 'vuex'
import { RootState } from '@/store'
import AuthController from '@/modules/auth/auth.controller'
import { createInstance } from '@/utils/metadata'

export interface IUserState {
  username: string
  avatar: string
  mobile: string
}

const user: Module<IUserState, RootState> = {
  namespaced: true,

  state: () => ({
    username: '',
    avatar: '',
    mobile: ''
  }),

  mutations: {
    SET_USERNAME(state, username = '') {
      state.username = username
    }
  },

  actions: {
    logout({ commit }) {
      commit('SET_USERNAME')
      createInstance(AuthController).setToken()
    }
  }
}

export default user
