import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Unicon from 'vue-unicons'
import { uniGithubAlt, uniVuejsAlt, uniAngleDown } from 'vue-unicons/src/icons'

Unicon.add([uniGithubAlt, uniVuejsAlt, uniAngleDown])
Vue.use(Unicon)


Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
