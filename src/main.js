import Vue from 'vue'
import App from './App'
import './quasar'
import firebaseInstance from './middleware/firebase'
import router from './router'
import store from './store'

Vue.config.productionTip = false

firebaseInstance.firebase.auth().onAuthStateChanged((user)=>{
  window.user=user;
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

