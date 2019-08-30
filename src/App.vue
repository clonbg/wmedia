<template>
  <div id="app">
    <Busqueda></Busqueda>
    <hr/>
    <Usuarios></Usuarios>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Usuarios from './components/Usuarios.vue'
import Busqueda from './components/Busqueda.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    Usuarios,
    Busqueda
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
