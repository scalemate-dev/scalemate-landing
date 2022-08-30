import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const root = new Vue({
  render: h => h(App)
});

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('app') != null) {
    root.$mount('#app');
  } else {
    // <div id="app"> was removed due to prerendering
    root.$mount('body > div');
  }
});