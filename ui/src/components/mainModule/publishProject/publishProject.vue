<template>
    <div class="main">
        <header>
            <img :src="require('../../../assets/bg2.jpg')" alt="">
            <div>
                <h1>建立属于自己的项目页面，<br>将您的精彩创意和更多人分享吧！</h1>
                <el-button type="danger">发布项目</el-button>
            </div>
        </header>
        <div class="container">
            <h2>发起众筹</h2>
            <el-steps :active="activeIndex" simple>
                <el-step title="注意事项" icon="el-icon-success"></el-step>
                <el-step title="填写信息" icon="el-icon-success"></el-step>
                <el-step title="详情编辑" icon="el-icon-success"></el-step>
                <el-step title="团队成员" icon="el-icon-success"></el-step>
                <el-step title="等待认证" icon="el-icon-success"></el-step>
            </el-steps>
            <div class="steps">
                <contract v-if="activeIndex === 0"></contract>
                <signMessage v-if="activeIndex === 1"></signMessage>
                <editMore v-if="activeIndex === 2"></editMore>
                <team v-if="activeIndex === 3"></team>
                <wait v-if="activeIndex === 4"></wait>
            </div>
        </div>
    </div>
</template>
<script>
import publishProject from './index.js'
export default publishProject
</script>
<style lang="scss" scoped>
    @import './index.scss' 
</style>
