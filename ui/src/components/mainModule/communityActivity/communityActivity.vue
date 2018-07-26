<template>
<div class="container">
    <el-row>
        <el-col :span="16">
            <publish @theLastest="getLastest"></publish>
            <div class="activity">
                <el-row>
                    <h2>创作者动态</h2>
                </el-row>
                <el-row class="options">
                    <i class="fa fa-th-large"></i>
                    <a href="javascript:;" v-for="(value,i) in nav" :key="i" :class="{navActive:value.active}" @click="getNavContent(value.name,i)">{{ value.name }}</a>
                </el-row>
                <div class="allActivity">
                    <activity v-for="(item,i) in lastestAct" :key="i" :item="item" @theLastest="getLastest"></activity>
                    <el-row class="more">
                        <el-button type="danger" plain>查看更多</el-button>
                    </el-row>
                </div>
            </div>
        </el-col>
        <el-col class="asideBar" :span="7" :offset="1">
            <div class="idCard">
                <el-row>
                    <el-col :span="8">
                        <img :src="require('../../../assets/user.png')" alt="">
                    </el-col>
                    <el-col class="intro" :span="16">
                        <span>昵称：tianyu</span>
                        <!-- <span>个人说明：欢迎fork me on github</span> -->
                        <span>
                            <span>关注：</span>
                            <router-link to="">5</router-link>
                        </span>
                        <span>
                            <span>粉丝：</span>
                            <router-link to="">2</router-link>
                        </span>
                    </el-col>
                </el-row>
            </div>
            <div class="hotTopic">
                <el-row>
                    <h2>热门话题</h2>
                    <span><i class="fa fa-refresh"></i>换一换</span>
                </el-row>
                <el-row>
                    <img :src="require('../../../assets/2.jpg')" alt="">
                </el-row>
                <h4># 你目前人生中最巅峰的时光是哪段？ #</h4>
                <p>35人讨论 · 30个赞 · 进行中</p>
            </div>
            <div class="funPerson">
                <el-row>
                    <h2>有趣的人</h2>
                    <span><i class="fa fa-refresh"></i>换一换</span>
                </el-row>
                <el-row>
                    <img :src="require('../../../assets/head.jpeg')" alt="">
                    <h4>AKin_Hon纸鬼</h4>
                    <span>25 篇动态 · 217 人已关注</span>
                    <hr>
                    <p>玩牛皮纸可不是吹牛皮</p>
                    <el-button type="danger">关注</el-button>
                </el-row>
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
