<template>
  <div>
    <h3>List of restaurants that sell {{ $route.params.comida }}</h3>
    <div class="row">
      <div class="col m3"></div>
      <div class="col m6">
        <div class="collection">
          <a href="#!" class="collection-item active">Rappi</a>
          <a href="#!" class="collection-item">Uber Eats</a>
          <a href="#!" class="collection-item">La Piccola Italia</a>
          <a href="#!" class="collection-item">Los chinohh</a>
        </div>  
      </div>
    </div>   
  </div>
</template>
<script>
  export default {
      name:'FastFood',
      beforeCreate: function() {
      document.body.className = 'category';
    } 
  }
</script>
<style scoped>
  h3{color:white}
</style>