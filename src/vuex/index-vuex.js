import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    productList: [], // 分类商品数据
    bargainList: [], // 砍价数据
    specialList: [], // 精选专题
    popularitylList: [], // 精选专题
    particularsList: [], // 商品详情
    quanList: [], // 全部商品详情
    commList: [], // 商品详情内容
    partId: '', // 详情页传递Id
    token: [], // 登录成功
    barinId: '', // 砍价详情传的ID
    barId: '',
    bainfo: [], // 砍价详情
    helps: [] // 已砍的价格

  },
  mutations: {
    fan (state, obj) {
      console.log(obj)
      state.token.push(obj)
      JSON.parse(window.localStorage.getItem('1902'))
      // state.token = obj
    }
  }
})
export default store
