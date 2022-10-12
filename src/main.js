import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './pages/index'
import Launch from './pages/Launch'

Vue.use(VueRouter);
Vue.config.productionTip = false


const routes = [
  { path: '/', component: Home },
  { path: '/launch', component: Launch },
]

const router = new VueRouter({
  routes,
  mode: 'history'
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