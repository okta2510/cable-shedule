<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img src="./../assets/img/logo.png" alt="" height="60">
      <span class="font-weight-bold px-2">
        610
      </span>
    </a>

    <ul class="navbar-nav ml-auto d-flex flex-row bd-highlight">
      <!-- <li v-for="link in links" class="nav-item">
        <a class="nav-link" v-bind:href="link.url">{{link.name}}</a>
      </li> -->
      <li>
        <a class="nav-link" href="javascript:void(0);">
          <font-awesome-icon icon="cog" @click="toggleMenu"/>
        </a>
      </li>
      <li>
        <a class="nav-link" href="#">
          <font-awesome-icon icon="question-circle" />
        </a>
      </li>
      <li>
        <a class="nav-link" href="javascript:void(0);">
          <font-awesome-icon icon="user" class="mr-1"/> Hello, 
          <span v-if="user">{{user.name}}</span>
          <span v-else>Welcome</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Vue from 'vue'



export default {
  name: 'topNav',
  props:['links'],
  data () {
    return {
      user:''
    }
  },
  beforeCreate(){
    this.$http.get('user').then(response => {
				// console.log(response);
        this.user = response.body[0];
        
			}, err => {
				console.log(err);
			});
  },
  methods:{
    toggleMenu(){
      $("#side-menu").toggleClass("d-none");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navbar-light .navbar-nav {
    text-align: right;
    li {
      display: inline-block;
    }
  }
  .navbar-light .navbar-nav .nav-link {
    font-size: 18px;
    margin: 0 5px;
      &:hover,&:focus {
        color:#3389C9;
      }
  }
  .navbar-brand {
    padding: 0;
    span {
      font-size: 32px;
      color:#3389C9;
    }
  }
</style>
