<template>
    <header class="header-nav">
        <el-row>
            <el-col :span="2" :offset="1">
                <div class="header">
                    <img src="../assets/icon.png" alt="">
                    <h1>众筹</h1>
                </div>
            </el-col>
            <el-col :span="14">
                <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" 
                text-color="#2f6761" active-text-color="#000">
                    <el-menu-item v-for="(item,i) in navList" :key="i" :index="i">
                        <router-link :to="item.name">{{ item.navItem }}</router-link>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="5" class="rightNav">
                <el-input placeholder="search" suffix-icon="el-icon-search" v-model="search"></el-input>
                <div class="lo-re-box">
                    <a href="javascrit:;">登录</a>
                    <span>|</span>
                    <a href="javascrit:;">注册</a>
                </div>
            </el-col>
        </el-row>
    </header>
</template>
<script>
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

        print(){
            console.log(this.activeIndex)
        }
    }
}
</script>
<style scoped>
header{
    border-bottom: 1px solid #ccc;
}
.header,.lo-re-box{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.header img{
    width: 50px;
    cursor:pointer;
}
header h1{
    font-size: 22px;
    color: rgb(119, 111, 111);
    cursor:pointer;
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
    display:flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
}
.lo-re-box{
    margin-left: 10px;
}
.rightNav a{
    font-size: 14px;
    text-decoration: none;
    width: 33px;
    margin-left: 5px;
    color: rgb(4, 61, 168);
}
.rightNav a:hover{
    text-decoration: underline blue;
}
</style>
