import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import App from './App'
import Home from './pages/index'
import Launch from './pages/Launch'
import BookDemo from './pages/BookDemo'
import Unite from './pages/Unite'

Vue.use(VueMeta)
Vue.use(VueRouter);
Vue.config.productionTip = false


const routes = [
  { path: '/', component: Home },
  { path: '/automate', component: Launch },
  { path: '/book-a-demo', component: BookDemo },
  { path: '/unite', component: Unite },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior () {
    return {x: 0, y: 0}
  }
})

const root = new Vue({
  router,
  render: h => h(App),
});

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('app') != null) {
    root.$mount('#app');
  } else {
    // <div id="app"> was removed due to prerendering
    root.$mount('body > div');
  }
});