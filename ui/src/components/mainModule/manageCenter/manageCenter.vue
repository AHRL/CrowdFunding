<template>
    <div class="manageCenter">
        <el-row class="main">
            <el-col :span="5">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="rgb(238, 240, 243)"
                    text-color="rgb(84, 127, 184)"
                    active-text-color="rgb(90, 87, 87)">
                    <el-row class="manager">
                        <el-col :span="5">
                            <img :src="require('../../../assets/head.jpeg')" alt="">
                        </el-col>
                        <el-col class="username" :span="16" :offset="2">
                            的说法是否水电费第三方
                        </el-col>
                    </el-row>
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>浏览量</span>
                        </template>
                        <el-menu-item-group>
                        <!-- <template slot="title">分组一</template> -->
                        <el-menu-item index="1-1">网站浏览量</el-menu-item>
                        <el-menu-item index="1-2">类别项目浏览量排行</el-menu-item>
                        <el-menu-item index="1-3">项目浏览量排行</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                        <el-menu-item index="1-4">获取金额总和</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="18" :offset="1">
                <!-- 网站浏览量 -->
                <!-- 今日注册量 -->
                <!-- 单个项目访问排行 -->
                <!-- 获取金额总和 -->
                <!-- 单个项目筹资金额排行 -->
                <!-- 月成功筹资统计 -->
                <!-- 各类项目筹资情况一览表 -->
                <!-- 消息列表 -->
                <!-- 我的设置 -->
            </el-col>
        </el-row>
    </div>
</template>
<script>
import manageCenter from './index'
export default manageCenter
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
