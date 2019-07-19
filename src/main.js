import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

export const bus = new Vue(); //event bus

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
