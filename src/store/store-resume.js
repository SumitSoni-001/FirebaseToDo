const state = {
  details: {
    name: '',
    phone: null,
    email: '',
    location: '',
    dob: '',
    qualification: '',
    skills: []
  }
}

const mutations = {
  updateDetails (state, payload) {
    console.log('Details Payload : ', payload)
    Object.assign(state.details, payload.detail)
  }
}

const actions = {
  updateDetails ({ commit }, payload) {
    commit('updateDetails', payload)
  }
}

const getters = {
  getDetails: (state) => {
    return state.details
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
