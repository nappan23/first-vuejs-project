// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Todos from './Todos'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
*/
new Vue({
  el: '#test',
  template: '<Todos/>',
  router,
  components: { Todos }
  // router
  // template: '<App/>',
  // components: { App }
})
