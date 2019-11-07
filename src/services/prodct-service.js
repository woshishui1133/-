// 第二个文件：M层

/*
* M : 数据
* V： 视图
* C： 业务逻辑层
* */

import HTTP from '../utils/http'
const _http = new HTTP()
class Product {
  // 砍价方法
  list () {
    return _http.request({
      url: 'https://api.it120.cc/small4/shop/goods/kanjia/list'
    })
  }
  // 砍一刀
  kan (obj) {
    return _http.request({
      type: 'post',
      url: 'https://api.it120.cc/small4/shop/goods/kanjia/help',
      data: {
        token: obj.token,
        kjid: obj.id,
        joinerUser: obj.uid
      }
    })
  }
  // 精选方法
  jingx () {
    return _http.request({
      url: 'https://api.it120.cc/small4/cms/news/list'
    })
  }
  // 人气推荐
  renq () {
    return _http.request({
      url: 'https://api.it120.cc/small4/shop/goods/list'
    })
  }
  // 商品详情
  part (productId) {
    return _http.request({
      type: 'post',
      url: 'https://api.it120.cc/small4/shop/goods/detail',
      data: {
        id: productId
      }
    })
  }
  // 分类全部商品
  quans () {
    return _http.request({
      url: 'https://api.it120.cc/small4/shop/goods/category/all'
    })
  }
  // 分类商品的详情
  fenxq () {
    return _http.request({
      url: 'https://api.it120.cc/small4/shop/goods/list'
    })
  }
  // 登录接口
  register (obj) {
    return _http.request({
      type: 'post',
      url: `https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey&mobile=${obj.mobile}&pwd=${obj.pwd}`
      // data: {
      //   // id: devname,
      //   deviceName: devname
      // }
    })
  }
  // 省份
  sheng () {
    return _http.request({
      url: 'https://api.it120.cc/common/region/province'
    })
  }
  // 市
  shi (pid) {
    return _http.request({
      type: 'post',
      url: `https://api.it120.cc/common/region/child?pid=${pid}`,
      data: {
        id: pid
      }
    })
  }
  // 图形验证
  tux (date) {
    return _http.request({
      type: 'post',
      url: 'https://api.it120.cc/small4/verification/pic/get?key=' + date,
      data: {
        key: date
      }
    })
  }
  // 短信验证码
  duanx (obj) {
    return _http.request({
      type: 'post',
      url: `https://api.it120.cc/small4/verification/sms/get?mobile=${obj.mobile}&key=${obj.num}&picCode=${obj.picCode}`
    })
  }
  // 商品评价数据
  reput (id) {
    return _http.request({
      type: 'post',
      url: `https://api.it120.cc/small4/shop/goods/reputation?goodsId=${id}`
    })
  }
  // 添加购物车的选择规格和尺寸
  goulist (obj) {
    return _http.request({
      type: 'post',
      url: `https://api.it120.cc/small4/shop/goods/price?goodsId=${obj.sid}&propertyChildIds=${obj.propid + ',' + obj.prcolor}`
    })
  }
  // 收货地址列表
  dizhi (token) {
    return _http.request({
      type: 'post',
      url: `https://api.it120.cc/small4/user/shipping-address/list?token=${token}`
    })
  }
  // 默认收货地址
  default (token) {
    return _http.request({
      type: 'post',
      url: `https://api.it120.cc/small4/user/shipping-address/default?token=${token}`

    })
  }

  // 添加收货地址
  shouhuo (obg) {
    return _http.request({
      type: 'post',
      url: `https://api.it120.cc/small4/user/shipping-address/add?address=${obg.xq}&cityId=${obg.shiId}&code=${obg.postal}&linkMan=${obg.name}&mobile=${obg.mobile}&provinceId=${obg.shengId}&token=${obg.token}`
    })
  }
  // 删除收货地址
  deledizhi (obj) {
    return _http.request({
      type: 'post',
      url: `https://api.it120.cc/small4/user/shipping-address/delete?token=${obj.token}&id=${obj.id}`
    })
  }
  // 订单详情
  orderxq (token, id) {
    return _http.request({
      type: 'post',
      url: `https://api.it120.cc/small4/order/detail`,
      data: {
        token: token,
        id: id
      }
    })
  }
  // 用户的所有订单
  orderlist (token) {
    return _http.request({
      type: 'post',
      url: 'https://api.it120.cc/small4/order/list',
      data: {
        token: token,
        pageSize: 1000
      }
    })
  }

  // 商品评论
  ping (obj) {
    return _http.request({
      type: 'post',
      url: 'https://api.it120.cc/small4/order/reputation',
      data: {
        postJsonString: obj.postJsonString,
        token: obj.token
      }
    })
  }
  // detail方法
  detail (productId) {
    return _http.request({
      type: 'post',
      url: 'shop/goods/detail',
      data: {
        id: productId
      }
    })
  }
}

export default Product
