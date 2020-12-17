import {createStore} from 'vuex'
import userInfo from './modules/userInfo.js'
const store = createStore({
  state: () => ({}),
  mutations: {},
  modules: {
    userInfo
  }
})

export default store