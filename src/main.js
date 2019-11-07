// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import axios from 'axios'
import Qs from 'Qs'
import store from './vuex/index-vuex'
import rem from '../static/rem'

router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    if (store.state.token.yy > 0) {
      next()
    } else {
      // Message({
      //       showClose: true,
      //       message: "请先登录",
      //       type: "error",
      //       duration: 2000
      //     });
      alert('请先登录')
      next(
        {
          path: '/Tologin'
        }
      )
    }
  } else {
    next()
  }
})

Vue.prototype.axios = axios
Vue.prototype.Qs = Qs
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  rem,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
