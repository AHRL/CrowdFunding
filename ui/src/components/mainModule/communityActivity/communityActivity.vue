<template>
<div class="container">
    <el-row>
        <el-col :xs="24" :span="16">
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
                    <activity v-for="(item,i) in lastestAct" :key="i" :item="item" :page="'communityActivity'" @theLastest="getLastest"></activity>
                    <el-row class="more">
                        <el-button type="danger" plain @click="getMore()">查看更多</el-button>
                    </el-row>
                </div>
            </div>
        </el-col>
        <el-col class="asideBar hidden-xs-only" :span="7" :offset="1">
            <!-- <div class="idCard">
                <el-row>
                    <el-col :span="8">
                        <img :src="require('../../../assets/user.png')" alt="">
                    </el-col>
                    <el-col class="intro" :span="16">
                        <span>昵称：tianyu</span>
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
            </div> -->
            <div class="hotTopic">
                <el-row>
                    <h2>热门话题</h2>
                    <span @click="topicChange"><i class="fa fa-refresh"></i>换一换</span>
                </el-row>
                <el-row>
                    <img :src="hotTopic.imgUrl" alt="">
                </el-row>
                <h4># {{ hotTopic.topic }} #</h4>
                <p>{{ hotTopic.commentNum }}人讨论 · {{ hotTopic.zanNum }}个赞 · {{ hotTopic.statu }}</p>
            </div>
            <div class="funPerson">
                <el-row>
                    <h2>有趣的人</h2>
                    <span @click="funPerChange"><i class="fa fa-refresh"></i>换一换</span>
                </el-row>
                <el-row>
                    <img :src="funPerson.headImg" alt="">
                    <h4>{{ funPerson.name }}</h4>
                    <span>{{ funPerson.activityNum }} 篇动态 · {{ funPerson.follower }} 人已关注</span>
                    <hr>
                    <p>{{ funPerson.intro }}</p>
                    <el-button type="danger" @click="follow">{{ funPerson.followStatu }}</el-button>
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
