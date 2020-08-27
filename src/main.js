import Vue from 'vue';
import pick from '@/directive/pick';
import animation from '@/directive/animation';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.directive('pick', pick);
Vue.directive('animation', animation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
