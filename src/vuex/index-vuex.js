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
    quanList: [] // 全部商品详情
  },
  mutations: {

  }
})
export default store
