<template>
<div id="app">
  <router-link class="prueba" v-bind:to="{ name: 'home', params: {home: 'home'} }">Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</router-link>
  <router-link class="prueba" v-bind:to="{ name: 'login', params:{login: 'login'} }"> Login</router-link>
  <br><br>
  <router-view /> 
</div>
</template>
<script>
  export default {
    name: 'App',
  }
</script>
<style>
  body.login,body.photos,body.restoran,body.category{
      background-color:#68c2a5;
  }
  body.home{
      background-color:none;
  }
  body.home .prueba {  
    color:#908C8C;
    }
    body.home .prueba:hover {  
    color:tomato;
    }
  #banner{
    width: 100%;
    height: 400px;
    background-image: url(assets/prueba.svg);
    background-repeat: no-repeat;
    background-size:cover;
    color: white;
  }
  #app {
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .prueba {  
    color:white;
    text-decoration: none;
    margin-left: 10px;
    font-size: 16pt;
    }
  .prueba:hover{
    color:tomato;
    }
</style>
