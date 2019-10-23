// 第一个文件 --axios封装

import Axios from 'axios'
import Qs from 'qs'
// 定义HTTP类
class HTTP {
  // HTTP下面的方法
  request (params) {
    // console.log(params)
    return new Promise((resolve, reject) => {
      Axios({
        method: params.type || 'get',
        url: params.url,
        data: Qs.stringify(params.data)
      }).then(res => {
        // console.log(res)
        if (!res.code) {
          console.log('请求成功')
        }
        resolve(res)
      })
    })
  }
}
export default HTTP
