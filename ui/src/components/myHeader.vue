<template>
    <header class="header-nav">
        <el-row>
            <el-col :xs="3" :sm="3" :md="3" :lg="2" :offset="1">
                <div class="header">
                    <img src="../assets/icon.png" alt="">
                    <h1>众筹</h1>
                </div>
            </el-col>
            <el-col :xs="18" :sm="20" :md="20" :lg="21" class="offcanvas-collapse">
                <el-col :xs="23" :sm="23" :md="20" :lg="18">
                    <el-menu :default-active="this.$route.path.replace(/([/][^/]+)$/, '')" router mode="horizontal">
                        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                            {{ item.navItem }}
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :xs="4" :sm="4" :md="4" :lg="4" class="rightNav">
                    <div>
                        <el-input placeholder="search" suffix-icon="el-icon-search"></el-input>
                    </div>
                    <div class="lo-re-box">
                        <router-link to="/login" v-if="!this.$store.state.user.name">登录</router-link>
                        <div class="isLogin" v-else>
                            <img :src="this.$store.state.user.img" >
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    <span class="username">{{ this.$store.state.user.name }}</span> <i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item><span @click="loginOut">注销</span></el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <!-- <span>|</span>
                        <a href="javascrit:;">注册</a> -->
                    </div>
                </el-col>
            </el-col>
            <el-col :xs="1" :sm="1" :md="1" :lg="1">
                <span class="nav-on" @click="navUp"><i></i><i></i><i></i></span>
            </el-col>
                <el-menu
                :default-active="this.$route.path.replace(/([/][^/]+)$/, '')"
                router
                :class="{'collaps-nav':true,'navActive':navActive}">
                <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                    <span slot="title">{{ item.navItem }}</span>
                </el-menu-item>
            </el-menu>
        </el-row>
    </header>
</template>
<script>
// import {mapState,mapGetters,mapActions,mapMutations} from '../vuex'
export default {
    data() {
      return {
        navList:[
            {name:'/findProject',navItem:'发现项目'},
            {name:'/communityActivity',navItem:'社区动态'},
            {name:'/publishProject',navItem:'发布项目'},
            {name:'/personalCenter',navItem:'个人中心'},
            {name:'/manageCenter',navItem:'管理员中心'},
        ],
        navActive:false
      };
    },
    methods: {
        pathTo (url) {
            this.$router.push(url)
        },
        loginOut(){
            this.$store.commit('LOGIN_OUT')
        },
        navUp(){
            this.navActive = !this.navActive
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
    z-index:10002;
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
.isLogin{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.isLogin img{
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
}
.el-dropdown .username{
    display: inline-block;
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;

}
span.nav-on{
    display:none;
    width:25px;
    position: absolute;
    top:20px;
    right:12px;
    cursor: pointer;
}
.nav-on i{
    display:block;
    width:100%;
    height:2px;
    background:rgb(137, 167, 192);
    border-radius: 1px;
    margin-bottom:5px;
} 
.collaps-nav{
    margin-top: 60px;
    display: none;
}
@media (max-width: 767.98px) {
    .offcanvas-collapse{
        display: none;
    }
    .navActive{
        display: block;
    }
    span.nav-on{
        display: block;
    }
}
</style>
