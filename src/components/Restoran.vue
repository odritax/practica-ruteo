<template>
<div>
  <img id="cinta" src="../assets/cinta.png" alt="">
  <h2 id="texto">{{nombre}}</h2>
  <router-view></router-view>
  <router-link  class="links" v-bind:to="{name: 'about', params: {restoran: nombre}}"> About |</router-link>
  <router-link  class="links" v-bind:to="{name: 'photos', params: {restoran: nombre}}"> Photos |</router-link>
  <router-link  class="links" v-bind:to="{name: 'reviews', params: {restoran: nombre}}"> Reviews</router-link>
</div>
</template>
<script>
  export default {
    name:"Restoran",
    props:{
      nombre:String
    },
    beforeCreate: function() {
      document.body.className = 'restoran';
    }
  }
</script>
<style scoped>
.links{color:#2c3e50;}
#cinta{
  position:relative;
  width: 380px;
}
#texto{
  color:white;
  font-size: 20pt;
  position: relative;
  top:-135px;
}
</style>