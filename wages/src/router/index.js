import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/views/Shouye'

import Gongzitiao from '@/views/Gongzitiao'
import Fagongzi from '@/views/Gongzitiao/children/fagongzi'
import Gongziguanli from '@/views/Gongzitiao/children/gongziguanli'
import Back from '@/views/Gongzitiao/children/back'

import QiyeServer from '@/views/QiyeServer'
import MoneyServer from '@/views/QiyeServer/children/moneyserver'
import Tabel from '@/views/QiyeServer/children/tabel'

import Login from '@/views/Login'
Vue.use(Router)

const newRouter = new Router({
  routes: [
    {
      path: '/',
      redirect: '/shouye'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: Shouye,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/gongzitiao',
      name: 'gongzitiao',
      component: Gongzitiao,
      meta: {
        title: '工资条'
      },
      children: [
        {
          path: 'fagongzi',
          name: 'fagongzi',
          component: Fagongzi,
          meta: {
            title: '发工资条'
          }
        },
        {
          path: 'gongziguanli',
          name: 'gongziguanli',
          component: Gongziguanli,
          meta: {
            title: '工资条管理'
          }
        },
        {
          path: 'back',
          name: 'back',
          component: Back,
          meta: {
            title: '员工反馈'
          }
        }
      ]
    },
    {
      path: '/qiyeserver',
      name: 'qiyeserver',
      component: QiyeServer,
      meta: {
        title: '企业管理'
      },
      children: [
        {
          path: 'moneyserver',
          name: 'moneyserver',
          component: MoneyServer,
          meta: {
            title: '企业账户'
          }
        },
        {
          path: 'tabel',
          name: 'tabel',
          component: Tabel,
          meta: {
            title: '员工管理'
          }
        }
      ]
    }
  ]
})
// newRouter.beforeEach((to, from, next) => {
//   if (window.localStorage.getItem('user')) {
//     next()
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
export default newRouter
