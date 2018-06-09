<template>
<div class="container">
    <el-row>
        <el-col :span="16">
            <el-row class="pubHeader">
                <h2>发布动态</h2>
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
            <div class="activity">
                <el-row>
                    <h2>创作者动态</h2>
                </el-row>
                <el-row class="options">
                    <i class="fa fa-th-large"></i>
                    <router-link to="">最新</router-link>
                    <router-link to="">关注</router-link>
                    <router-link to="">图片</router-link>
                    <router-link to="">投票</router-link>
                    <router-link to="">长文</router-link>
                </el-row>
                <div class="allActivity">
                    <el-row class="one">
                        <el-row>
                            <el-col class="authorBox">
                                <img :src="require('../../../assets/head.jpeg')" alt="">
                                <div>
                                    <span>小周动漫</span>
                                    <span>今天07:50 · 发布长文</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <p>
                                今天天气很好...
                            </p>
                            <div v-if="img.length>0" class="photoWall">
                                <el-row v-if="img.length == 1">
                                    <el-col :span="24">
                                        <img :src="img[0]" />
                                    </el-col>
                                </el-row>
                                <el-row v-else-if="img.length > 1&&img.length<=4">
                                    <el-col :span="12" v-for="(item,i) in img" :key="i">
                                        <img :src="item" alt="">
                                    </el-col>
                                </el-row>
                                <el-row v-else-if="img.length > 4 && img.length <= 9">
                                    <el-col :span="8" v-for="(item,i) in img" :key="i">
                                        <img :src="item" alt="">
                                    </el-col>
                                </el-row>
                                <el-row v-else-if="img.length > 9">
                                    <el-col :span="8" v-for="(item,i) in img" :key="i" v-if="i < 8">
                                        <img :src="item" alt="">
                                    </el-col>
                                </el-row>
                            </div>
                        </el-row>
                        <el-row class="operations">
                            <span><i class="fa fa-share"></i>分享</span>
                            <span><i class="fa fa-comment"></i>3条评论</span>
                            <span><i class="fa fa-thumbs-up"></i>11赞</span>
                        </el-row>
                        <el-row class="comment">
                            <el-row>
                                <el-col :span="1">
                                    <img class="headImg" :src="require('../../../assets/head.jpeg')" alt="">
                                </el-col>
                                <el-col :span="19">
                                    <span class="commentName">艾米 · 40分钟前</span>
                                    <span>全色系上一套会怎么样</span>
                                </el-col>
                                <el-col :span="3">
                                    <i class="fa fa-comment"></i>
                                    <span><i class="fa fa-thumbs-up"></i>1</span>
                                </el-col>
                            </el-row>
                            <el-row class="moreComment">
                                <router-link to="">查看全部7条评论<i class="el-icon-caret-right"></i></router-link>
                            </el-row>
                            <el-row class="myCom">
                                <el-col :span="23">
                                    <img class="headImg" :src="require('../../../assets/head.jpeg')" alt="">
                                    <el-input placeholder="请登录后发表评论" suffix-icon="el-icon-picture"></el-input>
                                    <i class="fa fa-arrow-right"></i>
                                </el-col>
                            </el-row>
                        </el-row>
                    </el-row>
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
