<template>
  <div id="app">
    <my-header></my-header>
    <router-view id="main"></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import myFooter from './components/myFooter'
export default {
  name: 'App',
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
#app{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#main{
  flex-grow:1;
  margin-bottom: 100px;
}
</style>
