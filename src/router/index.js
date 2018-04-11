import Vue from 'vue';
import Router from 'vue-router';
import MainIndex from './../components/mainindex/MainIndex';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainIndex',
      component: MainIndex,
    },
  ],
});
