import Vue from 'vue'
import App from './App.vue'
import router from './router';  // añadimos esta línea
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,    
}).$mount('#app')



