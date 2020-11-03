// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import 'normalize.css/normalize.css'
import './assets/css/fonts/iconfont.css'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(GeminiScrollbar)
Vue.use(ViewUI)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  store.commit('setMenuInd', to.meta.ind)
  store.commit('setUrlkey', to.meta.urlkey)
  store.commit('setBread', to.meta.bread)
  next()
  // if (to.path === '/log/login' || to.path === '/log/register' || to.path === '/log/forgetpass') {
  //   next()
  // } else {
  //   if (localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined') {
  //     let localData = JSON.parse(localStorage.getItem('data'))
  //     store.commit('setAvatar', localData.headimgurl)
  //     next()
  //   } else {
  //     next({
  //       path: '/log/login'
  //     })
  //   }
  // }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
