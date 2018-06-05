<template>
    <header class="header-nav">
        <el-row>
            <el-col :xs="3" :sm="3" :md="3" :lg="2" :offset="1">
                <div class="header">
                    <img src="../assets/icon.png" alt="">
                    <h1>众筹</h1>
                </div>
            </el-col>
            <el-col :sm="15" :md="14" :lg="11">
                <el-menu :default-active="activeIndex" mode="horizontal">
                    <el-menu-item v-for="(item,i) in navList" :key="i" :index="(i+1).toString()" @click="pathTo(item.name)">
                        {{ item.navItem }}
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :xs="5" :sm="5" :md="6" :lg="5" class="rightNav">
                <div>
                    <el-input placeholder="search" suffix-icon="el-icon-search" v-model="search"></el-input>
                </div>
                <div class="lo-re-box">
                    <router-link to="/login">登录</router-link>
                    <!-- <span>|</span>
                    <a href="javascrit:;">注册</a> -->
                </div>
            </el-col>
        </el-row>
    </header>
</template>
<script>
// import {mapState,mapGetters,mapActions,mapMutations} from '../vuex'
export default {
    data() {
      return {
        navList:[
            {name:'findProject',navItem:'发现项目'},
            {name:'communityActivity',navItem:'社区动态'},
            {name:'publishProject',navItem:'发布项目'},
            {name:'personalCenter',navItem:'个人中心'},
            {name:'manageCenter',navItem:'管理员中心'},
        ],
        activeIndex: '1',
        search:''
      };
    },
    methods: {
       pathTo (url) {
           this.$router.push(url)
       }
    }
}
</script>
<style scoped>
header{
    border-bottom: 1px solid #ccc;
    background: white;
    width: 100%;
    position: fixed;
    z-index:999;
}
.header,.lo-re-box,.rightNav{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.header img{
    width:40px;
}
header h1{
    width: 60px;
    font-size: 22px;
    color: rgb(119, 111, 111);
}
.el-menu{
    border:none;
}
.el-menu-item a{
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
}
.rightNav{
    position: absolute;
    right: 20px;
    height: 60px;
    text-align:right;
}
.lo-re-box{
    margin-left: 20px;
}
.rightNav a{
    font-size: 14px;
    width: 30px;
    text-decoration: none;
    color: rgb(4, 61, 168);
}
.rightNav a:hover{
    text-decoration: underline blue;
}
</style>
