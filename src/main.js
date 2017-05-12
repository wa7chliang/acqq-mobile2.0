// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import head from './components/header/header'
import dev from './components/dev/dev'
import menu from './components/menu/menu'
import tall from './components/tall/tall'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path:'/dev', component:dev},
  {path:'/menu',component:menu},
  {path:'/tall',component:tall},
  {path:'*',redirect:'/dev'}
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})

