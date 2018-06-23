<template>
    <div class="myProject">
        <div class="mine">
            <h2>我发布的项目</h2>
            <div class="all">
                <div class="one">
                    <div class="imgs">
                        <img :src="require('@/assets/2.jpg')" alt="">
                    </div>
                    <el-col class="content" :xs="11" :sm="14" :md="15" :lg="16" :xl="16">
                        <h4>摩擦大会<a href="javascript:;"><img :src="require('../../../../assets/link.png')" alt=""></a><span>2018-4-3</span></h4>
                        <p>的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的方式发多少的身份的身份电费第三方的说法撒地方撒旦第三方士大夫的撒</p>
                        <el-progress :percentage="70" color="#ea606b"></el-progress>
                        <div class="tags">
                            <el-tag size="mini">2 · 评论</el-tag>
                            <el-tag size="mini">2 · 赞</el-tag>
                        </div>
                    </el-col>
                </div>
            </div>
        </div>
        <div class="myFocus">
            <h2>我关注的项目</h2>
            <div class="all">
                <el-row class="one">
                    <el-col :span="8">
                        <el-card>
                            <img class="attach" :src="require('../../../../assets/attachment.png')" alt="">
                            <img :src="require('../../../../assets/2.jpg')" class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                <el-button type="text" class="button">操作按钮</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .myProject{
        color: black;
        .mine{
            .all{
                margin-top: 20px;
                overflow: hidden;
                h4{
                    margin: 0;
                    padding:0;
                    position: relative;
                    img{
                        width:25px;
                        position: relative;
                        top: 5px;
                        left: 5px;
                    }
                    span{
                        position: absolute;
                        right: 10px;
                        bottom: 0;
                        font-size: 0.8rem;
                        font-weight: 500;
                    }
                }
                .one{
                    &>div{
                        float: left;
                    }
                    .imgs{
                        margin-right: 20px;
                        font-size: 0;
                        img{
                            height: 150px;
                        }
                    }
                    .content{
                        height: 150px;
                        position: relative;
                        >p{
                            height:55px;
                            overflow: hidden;
                            margin: 5px 0;
                            font-size: 0.8rem;
                            line-height: 1.5;
                        }
                        .tags{
                            width: 100%;
                            /deep/ .el-tag{
                                margin-top: 15px;
                                color:#fff;
                                &:first-child{
                                    background: #6c6d6e;
                                }
                                &:nth-child(2){
                                    background: rgb(245, 119, 46);
                                }
                            }
                        }
                    }
                }
            }
        }
        .myFocus{
            margin-top: 30px;
            clear: both;
            .one{
                .el-col{
                    position: relative;
                    img:not(.attach){
                        width: 100%;
                        margin-top: 40px;
                    }
                    .attach{
                        $attachWid:40px;
                        position: absolute;
                        right: -$attachWid/2+10;
                        top: -$attachWid/2+10;
                        width: $attachWid;
                    }

                }
            }
        }
    }
</style>