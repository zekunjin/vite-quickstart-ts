import { Commit } from 'vuex'

export interface IUserState {
  id: string
  username: string
  mobile: string
}

const user = {
  namespaced: true,

  state: {
    id: '',
    username: 'USERNAME',
    mobile: ''
  },

  mutations: {
    SET_ID(state: IUserState, id: string) {
      state.id = id
    }
  },

  actions: {
    login({ commit }: { commit: Commit }): Promise<void> {
      return new Promise((resolve, reject) => {
        commit('SET_ID', 'ID')
        resolve()
      })
    }
  }
}

export default user
