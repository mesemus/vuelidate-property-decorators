<template>
  <div id="app">
    <VuelidateTest/>
  </div>
</template>

<script>
import VuelidateTest from './components/VuelidateTest.vue'

export default {
  name: 'app',
  components: {
    VuelidateTest
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
