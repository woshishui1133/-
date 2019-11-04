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
    token: {}, // 登录成功
    barinId: '', // 砍价详情传的ID
    barId: '',
    bainfo: [], // 砍价详情
    helps: [], // 已砍的价格
    num: 1, // 购物车数量
    gouwuList: [], // 购物车的数据
    qxcheck: { check: true }, // 全选
    dele: false,
    dizhilist: [], // 地址数据
    moren: [], // 默认地址
    ordernumber: [], // 订单号数据
    shunum: 0,
    logstatus: false, // 登录状态
    orderid: '', // 订单号的ID
    orderxq: [], // 我的订单详情
    order: [] // 订单号内容

  },
  mutations: {
    // 登录
    fan (state, obj) {
      state.token = obj
      // this.$store.state.token = JSON.parse(window.localStorage.getItem('1902'))
      console.log(state.token)

      // state.token = obj
    },
    // 购物车数据
    gouwulist (state, val) {
      let index = state.gouwuList.findIndex(item => {
        return item.colorid === val.colorid && item.sizeid === val.sizeid
      })
      if (index === -1) {
        state.gouwuList.push(val)
      } else {
        state.gouwuList[index].num++
      }
      // this.$store.state.gouwuList = JSON.parse(window.localStorage.getItem('gouwu'))
      console.log(state.gouwuList)
    },
    // 复选框
    xuan (state) {
      console.log(1)
      let arr = state.gouwuList.every(item => {
        return item.checked === true
      })
      console.log(arr)
      if (arr) {
        state.qxcheck.check = true
      } else {
        state.qxcheck.check = false
      }
    },
    // 全选框
    qcheck (state) {
      state.qxcheck.check = !state.qxcheck.check
      state.gouwuList.map(item => {
        item.checked = !item.checked
      })
    },
    // 点击完成
    accom (state) {
      state.qxcheck.check = !state.qxcheck.check
      state.gouwuList.map(item => {
        item.checked = false
      })
      state.dele = true
    },
    // 点击编辑
    editor (state) {
      state.qxcheck.check = !state.qxcheck.check
      state.gouwuList.map(item => {
        item.checked = true
      })
      state.dele = false
    },
    // 删除
    deleted (state) {
      let arr = []
      state.gouwuList.filter((item, index) => {
        if (item.checked === false) {
          arr.push(item)
        }
      })
      state.gouwuList = arr
    }
  },
  getters: {
    // 总个数
    nums (state) {
      let shunum0 = 0
      state.gouwuList.map(item => {
        shunum0 += item.num
        // console.log(numss1)
      })
      return shunum0
    },
    // 总价
    prices (state) {
      let pricess = 0
      state.gouwuList.map(item => {
        if (item.checked === true) {
          pricess += item.num * item.barinfo.basicInfo.minPrice
          // console.log(pricess)
        }
      })
      return pricess
    }
  }
})
export default store
