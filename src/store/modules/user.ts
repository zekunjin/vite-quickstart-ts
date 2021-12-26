import { Module } from 'vuex'
import { RootState } from '@/store'
import AuthService from '@/modules/auth/auth.service'
import AuthController from '@/modules/auth/auth.controller'

export interface IUserState {
  username: string
  avatar: string
  mobile: string
}

const authService = new AuthService()
const authController = new AuthController(authService)

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
      authController.setToken()
    }
  }
}

export default user
