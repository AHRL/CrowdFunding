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
  body {
    margin: 0;
    padding: 0;
    color: rgb(151, 151, 151);
    /* min-width: 1200px; */
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

#main {
    flex-grow: 1;
    margin-bottom: 100px;
}
.el-collapse-item__header{
    font-size: 16px;
    height: 40px;
    line-height: 40px;
}
.el-collapse-item__arrow{
  line-height: 40px;
}
.el-collapse-item__header.is-active{
  font-weight: 600;
}
.el-collapse-item__content{
  padding-top: 5px;
  padding-bottom:5px;
}
.el-card__body{
  padding: 0;
}
</style>

