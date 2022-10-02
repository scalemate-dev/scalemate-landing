import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes'

Vue.use(VueRouter);
Vue.config.productionTip = false

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