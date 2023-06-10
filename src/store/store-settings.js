const state = {
  settings: {
    showTimeFormat: true
  }
}

const mutations = {
  setShowTimeFormat (state, value) {
    state.showTimeFormat = value
  }
}

const actions = {
  setShowTimeFormat ({ commit }, value) {
    commit('setShowTimeFormat', value)
  }
}

const getters = {
  settings: state => {
    return state.settings
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
