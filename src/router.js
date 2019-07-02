import Vue from 'vue'
import Router from 'vue-router'
import Results from './views/Results.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'results',
      component: Results
    },
    {
      path: '/kako-igrati',
      name: 'howtoplay',
      component: () => import('./views/HowToPlay.vue')
    },
    {
      path: '/uplata-isplata',
      name: 'payment',
      component: () => import('./views/Payment.vue')
    },
    {
      path: '/raspored-izvlacenja',
      name: 'PulloutSchedule',
      component: () => import('./views/PulloutSchedule.vue')
    },
    {
      path: '/kontakt',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
