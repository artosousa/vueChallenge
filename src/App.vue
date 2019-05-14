<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header';  

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  
}
a{
    color: green;
    padding-right: 5px;
    text-decoration: none;
    display: block;
  }
  a:visited{
    color: green;
  }
</style>
