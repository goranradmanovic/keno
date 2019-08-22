import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'slick-carousel/slick/slick.css'; //Includin sclick slider css into app
import 'slick-carousel/slick/slick-theme.css'; //Includin sclick slider css into app
import 'slick-carousel/slick/slick.min.js'; //Includin sclick slider js into app
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(BootstrapVue);

//Event Bus
export const bus = new Vue();

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB47LvybcbHyvvHxkLdK5AOCjtaaEgscVw',
    libraries: 'places',
    region: 'SR',
    language: 'sr',
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
