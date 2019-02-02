import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import dashboard from '@/pages/dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  hash: false,
  history: true,
  linkActiveClass: 'active',
  transitionOnLoad: true,
  root: '/',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
