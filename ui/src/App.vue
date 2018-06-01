<template>
  <div id="app">
    <my-header></my-header>
    <transition name="bounce">
      <router-view></router-view>
    </transition>
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
</style>
