<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <Hello msg="Vuejs tets app" />
    <Count />
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    Hello,
    Count
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
