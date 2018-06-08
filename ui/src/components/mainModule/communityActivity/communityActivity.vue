<template>
<div class="container">
    <el-row>
        <el-col :span="16">
            <el-row class="pubHeader">
                <h1>发布动态</h1>
                <p>做一个有趣的人，分享有趣的事儿</p>
            </el-row>
            <el-row class="publishText">
                <el-input type="textarea" v-model="pubText" :maxlength="500" :rows="5" resize="none" placeholder="请输入内容..."></el-input>
                <span>{{ pubText.length }}/500</span>
            </el-row>
            <el-row class="pubBottom">
                <div>
                    <div>
                        <i class="fa fa-photo"></i>
                        <span>图片</span>
                    </div>
                    <div>
                        <i class="fa fa-bar-chart"></i>
                        <span>投票</span>
                    </div>
                    <div>
                        <i class="fa fa-file-text-o"></i>
                        <span>长文</span>
                    </div>
                    <el-button type="primary">发表</el-button>
                </div>
            </el-row>
        </el-col>
        <el-col :span="7" :offset="1">
            <div>
                <img :src="require('../../../assets/user.png')" alt="">
                <span></span>
            </div>
        </el-col>
    </el-row>
</div>
</template>
<script>
import communityActivity from './index.js'
export default communityActivity
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
