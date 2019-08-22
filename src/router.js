import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
      name: 'pulloutschedule',
      component: () => import('./views/PulloutSchedule.vue')
    },
    {
      path: '/novosti',
      name: 'news',
      component: () => import('./views/News.vue')
    },
    {
      path: '/svirezultati',
      name: 'allresults',
      component: () => import('./views/AllResults.vue'),
    },
    {
      path: '/registracija',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/profil',
      name: 'userprofil',
      component: () => import('./views/UserProfil.vue')
    },

    {
      path: '/novosticlanak',
      name: 'singlenews',
      component: () => import('./views/SingleNews.vue')
    },

    {
      path: '/univerzalna',
      name: 'universal',
      component: () => import('./views/Universal.vue')
    },
  ]
})
