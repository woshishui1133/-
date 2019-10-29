import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/view/HelloWorld'
import Bargain from '@/components/bargain/bargain'
import barDeta from '@/components/bargain/bargain-details'
import Special from '@/components/special/special'
import Details from '@/components/special/details'
import Classify from '@/view/classify'
import Particulars from '../components/popularity/particulars'
import Route from '../components/route'
import Home from '../view/Home'
import claDeta from '../components/classify/class-details'
import PersCen from '../view/personal-center'
import Tologin from '../components/To login/Tologin'
import Register from '../components/To login/register'
import Sign from '../components/signin/sign'
import Conver from '../components/signin/conver'
import Barinfo from '../components/bargain/bargain_info'
import Shopp from '../components/shopping/shopping'
import Orderform from '../components/shopping/orderform'
import Site from '../components/shopping/site'
import Sitelist from '../components/shopping/sitelist'
import Ordernumber from '../components/shopping/ordernumber'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      mat: {
        requireAuth: true
      },
      children: [
        {
          path: '',
          name: 'Home',
          component: Route
        }
        // {
        //   path: '/classify',
        //   name: 'Classify',
        //   component: Classify
        // }
      ]
    },
    // 砍价列表
    {
      path: '/bargain/:barId?',
      name: 'Bargain',
      component: Bargain
    },
    // 严选专栏
    {
      path: '/special',
      name: 'Special',
      component: Special
    },
    // 专栏详情
    {
      path: '/details/:detaId?',
      name: 'Details',
      component: Details
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    // 人气详情
    {
      path: '/particulars/:id?',
      name: 'Particulars',
      component: Particulars
    },
    // 砍价详情
    {
      path: '/bargain-details/:bardetaId?',
      name: 'barDeta',
      component: barDeta
    },
    // 分类商品详情
    {
      path: '/class-details/:cladetaId?',
      name: 'claDeta',
      component: claDeta
    },
    // 个人中心
    {
      path: '/personal-center',
      name: 'PersCen',
      component: PersCen
    },
    // 账号登录
    {
      path: '/Tologin',
      name: 'Tologin',
      component: Tologin
    },
    // 注册页面
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    // 签到
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    // 兑换
    {
      path: '/conver',
      name: 'Conver',
      component: Conver
    },
    // 砍价页
    {
      path: '/bargain_info',
      name: 'Barinfo',
      component: Barinfo
    },
    // 购物车
    {
      path: '/shopping',
      name: 'Shopp',
      component: Shopp
    },
    // 订单页面
    {
      path: '/orderform',
      name: 'Orderform',
      component: Orderform
    },
    // 地址
    {
      path: '/site',
      name: 'Site',
      component: Site
    },
    // 地址详情
    {
      path: '/sitelist',
      name: 'Sitelist',
      component: Sitelist
    },
    // 订单号页面
    {
      path: '/ordernumber',
      name: 'Ordernumber',
      component: Ordernumber
    }
  ]
})

// Router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (sessionStorage.getItem('token') === 'true') {
//       next()
//     } else {
//       // 未登录，跳转到登录页面
//       next({
//         path: '/Tologin'
//       })
//     }
//   } else {
//     if (sessionStorage.getItem('token') === 'true') {
//       next('/Home')
//     } else {
//       next()
//     }
//   }
// })

// Router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (sessionStorage.getItem('token') === 'true') { // 判断本地是否存在token
//       next()
//     } else {
//       // 未登录,跳转到登陆页面
//       next({
//         path: '/Tologin'
//       })
//     }
//   } else {
//     if (sessionStorage.getItem('token') === 'true') {
//       next('/Home')
//     } else {
//       next()
//     }
//   }
// })
