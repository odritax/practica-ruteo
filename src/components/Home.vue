<template>
<div>
  <div id="banner">
    <br><br><br><br><br>
    <h1>Bienvenido</h1>
    <p id="texto">Encuentra los mejores platos de comida Méxicana, Indú, 
      Japonesa y China en la región y en pocos pasos</p>
  </div>
</div>
</template>
<script>
  export default {
    name: 'Home',
    beforeCreate: function() {
      document.body.className = 'home';
    }
  }
</script>
<style>
  #texto{font-size: 14pt;}
</style>
