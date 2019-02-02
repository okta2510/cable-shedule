<template>
  <div id="app">
    <div id="side-menu" class="d-none">
     <div class="d-flex">
        <h2>tolbar</h2>
        <font-awesome-icon icon="times"/>
        <font-awesome-icon icon="sync-alt"/>
     </div>
    </div>
    <topNav v-bind:links="links"></topNav>
    <router-view/>

  </div>
  
</template>

<script>
import Vue from 'vue'
import router from './router'

// get bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// get vuetify
import 'vuetify/dist/vuetify.min.css'

import topNav from './components/topNav'

Vue.use(BootstrapVue);

export default {
  name: 'App',
  components: { topNav },
  data:function(){
    return {
      links:[{
        name:'dashboard',
        url:'/'
      },{
        name:'tes',
        url:'/test'
      }],
    }
  },
  created(){

  }
}
</script>

<style scoped lang="scss" >
#side-menu {
  width: 300px;
  background-color: #184470;
  color:#fff;
  position: fixed;
  top:75px;
  right: 0px;
  z-index: 9;
  bottom: 0;
  height:100%;
}
</style>
