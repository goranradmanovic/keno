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
      name: 'pulloutschedule',
      component: () => import('./views/PulloutSchedule.vue')
    },
    {
      path: '/novosti',
      name: 'news',
      component: () => import('./views/News.vue')
    },
    {
      path: '/kontakt',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/svirezultati',
      name: 'allresults',
      component: () => import('./views/AllResults.vue'),
    },
    {
      path: '/prodajnamjesta',
      name: 'saleplaces',
      component: () => import('./views/SalePlaces.vue'),
    },
    {
      path: '/registracija',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/prijava',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/profil',
      name: 'userprofil',
      component: () => import('./views/UserProfil.vue')
    },
    {
      path: '/blogpostovi',
      name: 'blogposts',
      component: () => import('./views/BlogPosts.vue'),
    },
    {
      path: '/uplatalotosuperpet',
      name: 'paymentlotosuper',
      component: () => import('./views/PaymentLotoSuper.vue'),
    },
    {
      path: '/uplatakenoloto',
      name: 'paymentkenoloto',
      component: () => import('./views/PaymentKenoLoto.vue'),
    },
    {
      path: '/komandnatabla',
      name: 'dashboard',
      props: true,
      beforeEnter: (to, from, next) => {

        if (to.params.email && to.params.password) {
          next();
        } else {
          next({ name: 'results' });
        }
      },
      component: () => import('./views/Dashboard.vue'),
    },
    {
      path: '/depozit',
      name: 'deposit',
      component: () => import('./views/Deposit.vue'),
    },
  ]
})
