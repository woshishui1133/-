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
  // 砍价详情
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
      // data: {
      //   date: date,
      //   key: key,
      //   num: num
      // }
    })
  }
  // 商品评价数据
  reput (id) {
    return _http.request({
      type: 'post',
      url: `https://api.it120.cc/small4/shop/goods/reputation?goodsId=${id}`
      // data: {
      //   goodsld: id
      // }
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
