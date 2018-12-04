import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : '#409EFF'
}

const getters = {
  theme: state => state.theme
}

const mutations = {
  UPDATE_THEME(state, theme) {
    state.theme = theme
    // 存入缓存
    localStorage.setItem('theme', theme)
  }
}

const actions = {
  updateTheme({ commit }, theme) {
    commit('UPDATE_THEME', theme)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store