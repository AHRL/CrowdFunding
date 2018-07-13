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
    /* margin-bottom: 200px; */
}
.el-collapse-item__header{
    font-size: 16px;
    height: 45px;
    line-height: 45px;
}
.el-collapse-item__arrow{
  line-height: 45px;
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
.el-input__icon {
    color:rgb(151, 151, 151); 
    font-size: 20px;
    cursor: pointer;
    padding-right: 5px;
}
.el-upload{
    display: block;
}
.w-e-text-container{
    min-height:400px;
}
.enlarge{
    background: rgba(32,14,54,0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 8888888;
}
.closeImg{
	position: absolute;
	right: 0;
	top: 0;
	color: white;
	font-weight: 600;
	font-size: 25px;
	z-index: 8888888;
	cursor: pointer;
}
.closeImg:hover{
	-webkit-transform:rotate(360deg);
    transform:rotate(360deg);
    -webkit-transition:-webkit-transform 1s linear;
    transition:transform 1s linear;
}
.enlargeImage{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
</style>

