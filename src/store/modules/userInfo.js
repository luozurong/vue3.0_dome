export default {
  state: () => ({
    username: localStorage.username || ''
  }) ,
  // {state, getters, rootState}
  getter: {},
  mutations: {
    username(state, value) {
      localStorage.setItem('username',value);
      state.username = value
    }
  },
   // {state, commit, rootState}
  actions: {}
}