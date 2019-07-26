import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(BootstrapVue);

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
