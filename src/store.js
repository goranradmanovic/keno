import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navLinks: [
      {
        name: 'Registruj se',
        path: '/registracija'
      },
      {
        name: 'Prijavi se',
        path: '/prijava',
      }
    ],

    subNavLinks: [
      {
        name: 'Rezultati',
        path: '/',
      },
      {
        name: 'Kako igrati',
        path: '/kako-igrati'
      },
      {
        name: 'Uplata i isplata',
        path: '/uplata-isplata'
      },
      {
        name: 'Raspored izvlačenja',
        path: '/raspored-izvlacenja'
      },
      {
        name: 'Novosti',
        path: '/novosti'
      },
      {
        name: 'O nama',
        path: '/kontakt'
      },
    ],
    dashboardLinks: [
      {
        name: 'Komandan Tabla',
        path: '/komandnatabla'
      },
      {
        name: 'Keno Uplata',
        path: '/uplatakenoloto',
      },
      {
        name: 'Super Loto 5 Uplata',
        path: '/uplatalotosuperpet',
      },
      {
        name: 'Blog Postovi',
        path: '/blogpostovi',
      },
      {
        name: 'Korisnički Profil',
        path: '/profil',
      },
      {
        name: 'Depozit',
        path: '/depozit',
      },
    ],
  },
  mutations: {

  },
  actions: {

  }
})
