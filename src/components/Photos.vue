<template>
<div id="images">
  <h5>Images</h5>
  <div class="row">
    <div class="col s12 m2"></div>
    <div class="col s12 m2">
      <div class="card">
        <div class="card-content white-text">
          <img class="imagen" src="@/assets/pollo.jpeg">
        </div>
      </div>
    </div>
    <div class="col s12 m2">
      <div class="card">
        <div class="card-content white-text">
          <img class="imagen" src="@/assets/pollo.jpeg">
        </div>
      </div>
    </div> 
    <div class="col s12 m2">
      <div class="card">
        <div class="card-content white-text">
          <img class="imagen" src="@/assets/pollo.jpeg">
        </div>
      </div>
    </div> 
    <div class="col s12 m2">
      <div class="card">
        <div class="card-content white-text">
          <img class="imagen" src="@/assets/pollo.jpeg">
        </div>
      </div>
    </div> 
    <div class="col s12 m2"></div>        
  </div>  
</div>  
</template>
<script>
  export default {
    name:"Photos",
    beforeCreate: function() {
      document.body.className = 'photos';
    }
  }
</script>
<style scoped>
  .imagen{width: 150px;}
  #images{
    position: relative;
    top: -100px;
  }  
</style>