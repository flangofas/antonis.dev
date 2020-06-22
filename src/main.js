import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import '@/assets/css/tw.css'

Vue.use(VueRouter)

const Home = {template: `<div>Home</div>`}
const About = {template: `<div>About</div>`}
const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About}
]
Vue.config.productionTip = false

new Vue({
  routes,
  render: h => h(App),
}).$mount('#app')
