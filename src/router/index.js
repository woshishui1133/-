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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
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
    }
  ]
})
