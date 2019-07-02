import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navLinks: [
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
        name: 'O nama',
        path: '/kontakt'
      },
    ],
  },
  mutations: {

  },
  actions: {

  }
})
