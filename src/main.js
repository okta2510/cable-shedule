// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee,faCog,faQuestionCircle,faUser,faTimes,faSyncAlt,faFileExcel,faPrint,faFilter,faCopy, faDesktop, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faCoffee,faCog,faQuestionCircle,faUser,faTimes,faSyncAlt,faFileExcel,faPrint,faFilter,faCopy, faDesktop, faQuestion)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueResource);

Vue.http.options.root = 'https://5c55e28f09580600147c4db1.mockapi.io/api/v1'
Vue.config.productionTip = false

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
})
