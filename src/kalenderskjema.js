import Vue from 'vue'
import Kalenderskjema from './Kalenderskjema.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Kalenderskjema),
}).$mount('#app')
