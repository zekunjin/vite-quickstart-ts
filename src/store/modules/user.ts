import { Module } from 'vuex'
import { RootState } from '@/store'
import AuthService from '@/services/auth.service'

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
      AuthService.removeToken()
    }
  }
}

export default user
