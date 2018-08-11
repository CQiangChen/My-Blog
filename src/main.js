// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routers'


import '../init.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(VueResource)

Vue.filter('igOverstep',(value)=>{
  if(value.length > 100 ){
    return value.slice(0,100) + "...";
  }
  else{
    return value;
  }
})

// 创建路由
const router = new VueRouter({
    routes: Routes,
    mode:"history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
