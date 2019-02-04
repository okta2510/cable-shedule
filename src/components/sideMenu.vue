<template>
   <div id="side-menu" class="d-none">
     <div class="d-flex align-items-center bd-highlight head-section mb-3">
        <h2 class="flex-grow-1 bd-highlight text-center">Toolbar</h2>
        <font-awesome-icon icon="sync-alt" class="bd-highlight fa cursor-pointer"/>
        <font-awesome-icon icon="times" @click="toggleMenu" class="bd-highlight fa cursor-pointer"/>
     </div>
     
     <div class="body-section">
       <div class="form-group mb-5">
         <label for="">Search</label>
         <input type="text" class="form-control form-control-lg" name="" id="" aria-describedby="helpId" placeholder="Type for the hull">
         <small id="helpId" class="form-text text-white">
         </small>
       </div>

        <hr class="bg-light">

        <div class="row m-0 mb-2">
         <div class="col-2 p-0">
           <font-awesome-icon icon="copy" class="fa cursor-pointer"/>
         </div>
         <div class="col-10 p-0">
          Copy Record for another hull
         </div>
       </div>
       
        <div class="row m-0 mb-2">
         <div class="col-2 p-0">
           <font-awesome-icon icon="filter" class="fa cursor-pointer"/>
         </div>
         <div class="col-10 p-0">
          Hide Deleted / not issued record
         </div>
       </div>

        <div class="row m-0 mb-2">
         <div class="col-2 p-0">
           <font-awesome-icon icon="filter" class="fa cursor-pointer"/>
         </div>
         <div class="col-10 p-0">
          report signature
         </div>
       </div>

        <div class="row m-0 mb-2">
         <div class="col-2 p-0">
         <font-awesome-icon icon="filter" class="fa cursor-pointer"/>
         </div>
         <div class="col-10 p-0">
          Problem Records
         </div>
       </div>

        <div class="row m-0 mb-2">
         <div class="col-2 p-0">
          <font-awesome-icon icon="filter" class="fa cursor-pointer"/>
         </div>
         <div class="col-10 p-0">
          Apply Cable correction Factor
         </div>
       </div>

        <hr class="bg-light">
        
        <div class="row m-0 mb-2">
         <div class="col-2 p-0">
          <input type="radio" class="form-check-input ml-0" name="group1" id="" value="checkedValue">
         </div>
         <div class="col-10 p-0">
          Voltdrop From estimated length
         </div>
       </div>

        <div class="row m-0 mb-2">
         <div class="col-2 p-0">
          <input type="radio" class="form-check-input ml-0" name="group1" id="" value="checkedValue">
         </div>
         <div class="col-10 p-0">
          Voltdrop From estimated length
         </div>
       </div>
      <hr class="bg-light">
       <div class="row pb-2 pt-2">
         <div class="col-6">
          <button class="btn btn-light btn-sm w-100 mb-2">
            Define Unit
          </button>
         </div>
         <div class="col-6">
          <button class="btn btn-light btn-sm w-100 mb-2">
            Cable Type
          </button>
         </div>
         <div class="col-6">
          <button class="btn btn-light btn-sm w-100 mb-2" disabled>
            Drawing Rev
          </button>
         </div>
         <div class="col-6">
          <button class="btn btn-light btn-sm w-100 mb-2">
            Force DWG Rev
          </button>
         </div>
       </div>
      
      <hr class="bg-light">

       <div class="row m-0 mb-2">
         <div class="col-2 p-0">
          <font-awesome-icon icon="print" class="fa cursor-pointer"/>
         </div>
         <div class="col-10 p-0">
          Network Cable
         </div>
       </div>
       <div class="row m-0 mb-2">
         <div class="col-2 p-0">
          <font-awesome-icon icon="print" class="fa cursor-pointer"/>
         </div>
         <div class="col-10 p-0">
           Weight
         </div>
       </div>
       <div class="row m-0 mb-2">
         <div class="col-2 p-0">
          <font-awesome-icon icon="print" class="fa cursor-pointer"/>
         </div>
         <div class="col-10 p-0">
           Missing Equipment
         </div>
       </div>
       <div class="row m-0 mb-2">
         <div class="col-2 p-0">
          <font-awesome-icon icon="print" class="fa cursor-pointer"/>
         </div>
         <div class="col-10 p-0">
           Cable Test Report
         </div>
       </div>
       <div class="row m-0 mb-2">
         <div class="col-2 p-0">
          <font-awesome-icon icon="print" class="fa cursor-pointer"/>
         </div>
         <div class="col-10 p-0">
           Problems
         </div>
       </div>
       <div class="row m-0 mb-2">
         <div class="col-2 p-0">
          <font-awesome-icon icon="file-excel" class="fa cursor-pointer"/>
         </div>
         <div class="col-10 p-0">
           Cable Schedule Report
         </div>
       </div>

      <hr class="bg-light">

      <div class="d-table w-100 text-right py-3">
        <font-awesome-icon icon="desktop" @click="toggleMenu" class="fa cursor-pointer mr-auto align-middle mx-2"/>
        <font-awesome-icon icon="question-circle" @click="toggleMenu" class="fa cursor-pointer mr-auto align-middle mx-2"/>
      </div>

     </div>
    </div>
</template>

<script>
import Vue from 'vue'



export default {
  name: 'SideMenu',
  props:[],
  data () {
    return {
      user:''
    }
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
  overflow: hidden;
  padding:30px 15px;
    .body-section {
      margin-right: -40px;
      padding-right: 40px;
      overflow-y:scroll;
      height: 90vh;
      padding-bottom: 30px;
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
