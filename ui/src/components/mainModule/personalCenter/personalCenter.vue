<template>
    <div class="container">
        <el-row class="wrap">
            <div class="sideBar">
                <el-menu class="personMenu" router :default-active="this.$route.path.replace(/.*\/([^\/]+)$/, '$1')" background-color="#5eadc7" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-radio-group>
                        <el-radio-button><i class="fa fa-list-ul"></i></el-radio-button>
                    </el-radio-group>
                    <div class="personMsg">
                        <img :src="require('../../../assets/head.jpeg')">
                        <div>
                            <p>AHRL</p>
                        </div>
                    </div>
                    <el-menu-item index="myMessage">
                        <i class="el-icon-menu"></i>
                        <span slot="title">个人资料</span>
                    </el-menu-item>
                    <el-menu-item index="myActivity">
                        <i class="el-icon-menu"></i>
                        <span slot="title">动态管理</span>
                    </el-menu-item>
                    <el-menu-item index="myProject">
                        <i class="el-icon-document"></i>
                        <span slot="title">项目信息</span>
                    </el-menu-item>
                    <el-menu-item index="mySetting">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的设置</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <el-col class="allContent" :span="22">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import personalCenter from './index.js'
export default personalCenter
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>
