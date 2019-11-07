import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/view/HelloWorld'
import Bargain from '@/components/bargain/bargain'
import barDeta from '@/components/bargain/bargain-details'
import Special from '@/components/special/special'
import Details from '@/components/special/details'
// import Classify from '@/view/classify'
import Particulars from '@/components/popularity/particulars'
import claDeta from '../components/classify/class-details'

import Tologin from '../components/To login/Tologin'
import Register from '../components/To login/register'
import Sign from '../components/signin/sign'
import Conver from '../components/signin/conver'
import Barinfo from '../components/bargain/bargain_info'

import Orderform from '../components/shopping/orderform'
import Site from '../components/shopping/site'
import Sitelist from '../components/shopping/sitelist'
import Ordernumber from '../components/shopping/ordernumber'
import Orderxq from '../components/To login/orderxq'
import Ordersp from '../components/To login/ordersp'

import classify from '@/view/classify'
import Shopp from '@/components/shopping/shopping'
import PersCen from '@/view/personal-center'

// 路由懒加载
const Route = () => import('@/components/route')
const Home = () => import('@/view/Home')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/fht22/',
  routes: [
    {
      path: '/',
      name: 'Route',
      component: Route,
      mat: {
        kep: true // 会被缓存
      },
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
          mat: {
            kep: true // 会被缓存
          }
        },
        {
          path: '/classify',
          name: 'classify',
          component: classify,
          mat: {
            kep: false // 会被缓存
          }
        },
        {
          path: '/shopping',
          name: 'Shopp',
          component: Shopp,
          mat: {
            kep: false // 会被缓存
          }
        },
        {
          path: '/personal-center',
          name: 'PersCen',
          component: PersCen,
          mat: {
            kep: false // 会被缓存
          }
        }
      ]
    },
    // 砍价列表
    {
      path: '/bargain/:barId?',
      name: 'Bargain',
      component: Bargain,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 严选专栏
    {
      path: '/special',
      name: 'Special',
      component: Special,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 专栏详情
    {
      path: '/details/:detaId?',
      name: 'Details',
      component: Details,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // {
    //   path: '/classify',
    //   name: 'Classify',
    //   component: Classify,
    //   mat: {
    //     kep: false // 不会被缓存
    //   }
    // },
    // 人气详情
    {
      path: '/particulars/:id?',
      name: 'Particulars',
      component: Particulars,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 砍价详情
    {
      path: '/bargain-details/:bardetaId?',
      name: 'barDeta',
      component: barDeta,
      mat: {
        kep: false // 不会被缓存
      }

    },
    // 分类商品详情
    {
      path: '/class-details/:cladetaId?',
      name: 'claDeta',
      component: claDeta,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 个人中心
    {
      path: '/personal-center',
      name: 'PersCen',
      component: PersCen,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 账号登录
    {
      path: '/Tologin',
      name: 'Tologin',
      component: Tologin,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 注册页面
    {
      path: '/register',
      name: 'Register',
      component: Register,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 签到
    {
      path: '/sign',
      name: 'Sign',
      component: Sign,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 兑换
    {
      path: '/conver',
      name: 'Conver',
      component: Conver,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 砍价页
    {
      path: '/bargain_info',
      name: 'Barinfo',
      component: Barinfo,
      mat: {
        kep: false // 不会被缓存
      }

    },
    // 购物车
    {
      path: '/shopping',
      name: 'Shopp',
      component: Shopp,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 订单页面
    {
      path: '/orderform',
      name: 'Orderform',
      component: Orderform,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 地址
    {
      path: '/site',
      name: 'Site',
      component: Site,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 地址详情
    {
      path: '/sitelist',
      name: 'Sitelist',
      component: Sitelist,
      meta: {
        keeyAlive: false,
        login: true,
        kep: false // 不会被缓存
      }
    },
    // 订单号页面
    {
      path: '/ordernumber/:numberId?',
      name: 'Ordernumber',
      component: Ordernumber,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 我的订单
    {
      path: '/orderxq',
      name: 'Orderxq',
      component: Orderxq,
      mat: {
        kep: false // 不会被缓存
      }
    },
    // 订单商品详情
    {
      path: '/ordersp/:orid?',
      name: 'Ordersp',
      component: Ordersp,
      meta: {
        keeyAlive: false,

        login: true,
        kep: false // 不会被缓存
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
