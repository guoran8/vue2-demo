import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/directive',
    name: 'Directive',
    component: () => import('../views/Directive'),
  },
  {
    path: '/animation',
    name: 'Animation',
    component: () => import('../views/Animation'),
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News'),
  },
  {
    path: '/lazy',
    name: 'Lazy',
    component: () => import('../views/lazy'),
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('../views/vuexDemo'),
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: () => import('../views/mixin'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about'),
    children: [
      {
        path: 'girl',
        name: 'girl',
        component: () => import('../views/about/girl'),
      },
      {
        path: 'boy',
        name: 'boy',
        component: () => import('../views/about/boy'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
