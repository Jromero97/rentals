// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import App from './App';
import router from './router';
import MainIndex from './components/mainindex/MainIndex';


import BootstrapVue from './../node_modules/bootstrap-vue/dist/bootstrap-vue.esm';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/bootstrap-vue/dist/bootstrap-vue.css';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(MainIndex);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAG6GNe44aM6Ezj1R28-CiGnmtfkzOlo80',
    libraries: 'places',
  },

});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
