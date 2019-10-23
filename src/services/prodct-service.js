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
