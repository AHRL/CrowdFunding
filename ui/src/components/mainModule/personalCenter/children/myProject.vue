<template>
    <div class="myProject">
        <div class="mine">
            <h2>我发布的项目</h2>
            <div class="all">
                <!-- <div class="nothing"><span>暂时还没有发布的项目</span></div> -->
                <div class="one" v-for="(pro,i) in init.myProjects" :key="i">
                    <div class="imgs">
                        <img :src="pro.proImg" alt="">
                    </div>
                    <el-col class="content" :xs="11" :sm="12" :md="13" :lg="16" :xl="16">
                        <h4>{{ pro.proName }}<a href="javascript:;"><img :src="require('../../../../assets/link.png')" alt=""></a><span>{{ pro.proDate }}</span></h4>
                        <p>{{ pro.proIntro }}</p>
                        <el-progress :percentage="pro.prpPercent" color="#ea606b"></el-progress>
                        <div class="tags">
                            <el-tag size="mini">{{ pro.commentsNum }} · 评论</el-tag>
                            <el-tag size="mini">{{ pro.zanNum }} · 赞</el-tag>
                            <div class="edit">
                                <i class="el-icon-delete" @click="deleteMyPro(pro.proId)"></i>
                            </div>
                        </div>
                    </el-col>
                </div>
            </div>
            <el-pagination
                background
                :page-size="5"
                :current-change="myProPage"
                layout="prev, pager, next"
                :total="init.myProTotal">
            </el-pagination>
        </div>
        <el-row class="myFocus">
            <h2>我关注的项目</h2>
            <el-row class="all">
                <!-- <div class="nothing"><span>暂时还没有关注的项目</span></div> -->
                <div class="one" v-for="(pro,i) in init.myFocusPro" :key="i">
                    <div class="imgs">
                        <img :src="pro.proImg" alt="">
                    </div>
                    <el-col class="content" :xs="11" :sm="12" :md="13" :lg="16" :xl="16">
                        <h4>{{ pro.proName }}<a href="javascript:;"><img :src="require('../../../../assets/link.png')" alt=""></a><span>{{ pro.proDate }}</span></h4>
                        <p>{{ pro.proIntro }}</p>
                        <el-progress :percentage="pro.prpPercent" color="#ea606b"></el-progress>
                        <div class="tags">
                            <el-tag size="mini">{{ pro.commentsNum }} · 评论</el-tag>
                            <el-tag size="mini">{{ pro.zanNum }} · 赞</el-tag>
                            <div class="edit">
                                <i class="el-icon-delete" @click="deleteMyFocusPro(pro.proId)"></i>
                            </div>
                        </div>
                    </el-col>
                </div>
            </el-row>
            <el-pagination
                background
                :page-size="5"
                :current-change="myFocusProPage"
                layout="prev, pager, next"
                :total="init.myFocusProTotal">
            </el-pagination>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            init:{
                myProTotal:20,
                myFocusProTotal:20,
                myProjects:[{
                    proImg:require('@/assets/2.jpg'),
                    proName:'摩擦大会',
                    proId:2,
                    proIntro:'的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的方式发多少的身份',
                    proDate:'2018-3-5',
                    prpPercent:70,
                    commentsNum:2,
                    zanNum:2
                },{
                    proId:2,
                    proImg:require('@/assets/2.jpg'),
                    proName:'摩擦大会',
                    proIntro:'的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的方式发多少的身份',
                    proDate:'2018-3-5',
                    prpPercent:70,
                    commentsNum:2,
                    zanNum:2
                }],
                myFocusPro:[{
                    proId:2,
                    proImg:require('@/assets/2.jpg'),
                    proName:'摩擦大会',
                    proIntro:'的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的方式发多少的身份',
                    proDate:'2018-3-5',
                    prpPercent:70,
                    commentsNum:2,
                    zanNum:2
                },{
                    proId:2,
                    proImg:require('@/assets/2.jpg'),
                    proName:'摩擦大会',
                    proIntro:'的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的说法大三第三方士大夫的撒范德萨范德萨发水的方式发多少的身份',
                    proDate:'2018-3-5',
                    prpPercent:70,
                    commentsNum:2,
                    zanNum:2
                }]
            },
            page:0,
            focusPage:0
        }
    },
    methods: {
        deleteMyPro(id){
            this.$axios.post('/deleteMyPro',{
                name:this.$store.state.user.name,
                proId:id
            }).then(res => this.init.myProjects = res.data).catch(err => console.log(err))
        },
        deleteMyFocusPro(id){
            this.$axios.post('/deleteMyFocusPro',{
                name:this.$store.state.user.name,
                proId:id
            }).then(res => this.init.myFocusPro = res.data).catch(err => console.log(err))
        },
        myProPage(curPage){
            this.page ++
            this.$axios.post('/myFocusProPage',{
                page:this.page
            }).then(res => this.init.myProjects = res.data).catch(err => console.log(err))
        },
        myFocusProPage(curPage){
            this.focusPage ++
            this.$axios.post('/myFocusProPage',{
                page:this.focusPage
            }).then(res => this.init.myFocusPro = res.data).catch(err => console.log(err))
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