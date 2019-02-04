<template>
  <div id="app">
   <SideMenu></SideMenu>
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
import SideMenu from './components/SideMenu'

Vue.use(BootstrapVue);

export default {
  name: 'App',
  components: { topNav,SideMenu },
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
  methods:{
    toggleMenu(){
      $("#side-menu").toggleClass("d-none");
    }
  }
}
</script>


<style lang="scss" >

.cursor-pointer {
  cursor: pointer!important;
}
#side-menu {
  width: 50vw;
  max-width: 300px;
  background-color: #184470;
  color:#fff;
  position: fixed;
  top:0px;
  right: 0px;
  z-index: 9;
  bottom: 0;
  height:100%;
    .body-section {
      svg {
        font-size: 24px;
        width: 26px;
      }
    }
    .head-section {
      .fa {
        overflow: hidden;
        flex: 0 2 auto!important;
        width: 30px!important;
        font-size: 24px;
      }
    }
}
</style>
