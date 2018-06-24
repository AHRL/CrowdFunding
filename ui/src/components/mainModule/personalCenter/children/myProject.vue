<template>
    <div class="myProject">
        <div class="mine">
            <h2>我发布的项目</h2>
            <div class="all">
                <!-- <div class="nothing"><span>暂时还没有发布的项目</span></div> -->
                <div class="one">
                    <div class="imgs">
                        <img :src="require('@/assets/2.jpg')" alt="">
                    </div>
                    <el-col class="content" :xs="11" :sm="12" :md="13" :lg="16" :xl="16">
                        <h4>摩擦大会<a href="javascript:;"><img :src="require('../../../../assets/link.png')" alt=""></a><span>2018-4-3</span></h4>
                        <p>的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的方式发多少的身份的身份电费第三方的说法撒地方撒旦第三方士大夫的撒</p>
                        <el-progress :percentage="70" color="#ea606b"></el-progress>
                        <div class="tags">
                            <el-tag size="mini">2 · 评论</el-tag>
                            <el-tag size="mini">2 · 赞</el-tag>
                            <div class="edit">
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </div>
                        </div>
                    </el-col>
                </div>
                <div class="one">
                    <div class="imgs">
                        <img :src="require('@/assets/2.jpg')" alt="">
                    </div>
                    <el-col class="content" :xs="11" :sm="12" :md="13" :lg="16" :xl="16">
                        <h4>摩擦大会<a href="javascript:;"><img :src="require('../../../../assets/link.png')" alt=""></a><span>2018-4-3</span></h4>
                        <p>的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的方式发多少的身份的身份电费第三方的说法撒地方撒旦第三方士大夫的撒</p>
                        <el-progress :percentage="70" color="#ea606b"></el-progress>
                        <div class="tags">
                            <el-tag size="mini">2 · 评论</el-tag>
                            <el-tag size="mini">2 · 赞</el-tag>
                            <div class="edit">
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </div>
                        </div>
                    </el-col>
                </div>
            </div>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
        <el-row class="myFocus">
            <h2>我关注的项目</h2>
            <el-row class="all">
                <!-- <div class="nothing"><span>暂时还没有关注的项目</span></div> -->
                <div class="one">
                    <div class="imgs">
                        <img :src="require('@/assets/2.jpg')" alt="">
                    </div>
                    <el-col class="content" :xs="11" :sm="12" :md="13" :lg="16" :xl="16">
                        <h4>摩擦大会<a href="javascript:;"><img :src="require('../../../../assets/link.png')" alt=""></a><span>2018-4-3</span></h4>
                        <p>的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的方式发多少的身份的身份电费第三方的说法撒地方撒旦第三方士大夫的撒</p>
                        <el-progress :percentage="70" color="#ea606b"></el-progress>
                        <div class="tags">
                            <el-tag size="mini">2 · 评论</el-tag>
                            <el-tag size="mini">2 · 赞</el-tag>
                            <div class="edit">
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </div>
                        </div>
                    </el-col>
                </div>
            </el-row>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
    .myProject{
        color: black;
        .nothing{
            height: 220px;
            position: relative;
            background: url('/static/project (4).png') no-repeat center center;
            &>span{
                text-align: center;
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                color: #6c6d6e;
            }
        }
        .all{
            margin-top: 20px;
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
                margin-bottom: 20px;
                overflow: hidden;
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
                        height:40px;
                        overflow: hidden;
                        margin: 10px 0;
                        font-size: 0.8rem;
                        line-height: 1.5;
                    }
                    .tags{
                        width: 100%;
                        position: relative;
                        text-align: right;
                        .el-tag{
                            margin-top: 15px;
                            color:#fff;
                            &:first-child{
                                background: #6c6d6e;
                            }
                            &:nth-child(2){
                                background: rgb(245, 119, 46);
                            }
                        }
                        .edit{
                            margin-right: 40px;
                            display: inline-block;
                            font-size: 20px;
                            position: relative;
                            left: 20px;
                            top: 3px;
                            color: rgb(29, 156, 156);
                            // position: absolute;
                            // right: 10px;
                            // top:15px;
                            cursor: pointer;
                            .el-icon-delete{
                                margin-left: 10px;
                                color: rgb(230, 53, 53);
                            }
                        }
                    }
                }
            }
        }
        .el-pagination{
                text-align: center;
                margin: 50px 0;
        }
        .myFocus{
            margin-top: 30px;
            clear: both;
        }
    }
</style>