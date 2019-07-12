// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import Component from 'vue-class-component'
// css
import './scss/common.scss'
require('es6-promise').polyfill();
// import test from './test'

const a = [1,2,3,4]

const b = [...a, 5,6]

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate"
])

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
	beforeCreate(){
		// console.log('vue before', test)
	},
	created() {
    // console.log('vue created')
  },
  beforeMount() {
    // console.log('vue beforeMount')
  },
  mounted() {
    // console.log('vue mounted')
  }
})
