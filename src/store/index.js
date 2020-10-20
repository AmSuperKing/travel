import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: state,
  // actions: {
  //   changeCity (ctx, city) {
  //     // console.log(city)
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // html5提供的API，localStorage，实现类似cookies的功能，做到本地存储，使用简单
  // mutations: mutations
  // getter从 store 中的 state 中派生出一些状态,计算新内容等
  state,
  mutations,
  getters: {
    niceCity (state) {
      return state.city + ' nice'
    }
  }
})
