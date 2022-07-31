import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'

Vue.config.productionTip = false



import Vant from 'vant';
import 'vant/lib/index.css';

// console.log(store.state.tokenObj.token);
Vue.use(Vant);
// import request from '@/utils/request'
// console.log(request);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
