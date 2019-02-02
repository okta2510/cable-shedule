<template>
   <div class="container">
      <div class="alert alert-success" role="alert">
      <h4 class="alert-heading"></h4>
      <p>asdasda</p>
      <p class="mb-0"></p>
    </div>
<font-awesome-icon icon="coffee" />
  <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button-counter></button-counter>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

   </div>
   
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      totalPost:''
    }
  },
  created(){
    $(document).ready(function(){
    });

    	this.$http.get('wp/v2/cbl_2018?per_page=100').then(response => {
				// console.log(response);
				this.totalPost = response.body.length;
			}, err => {
				console.log(err);
			});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
