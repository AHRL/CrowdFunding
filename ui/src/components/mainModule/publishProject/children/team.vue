<template>
    <div class="main">
        <div class="projectName">
            <h3>项目名称：众筹</h3>
        </div>
        <div class="captain">
            <div>
                <img :src="require('../../../../assets/head.jpeg')" alt="">
            </div>
            <div class="captainIntro">
                <h4>tianyu</h4>
                <span>职位：项目负责人</span>
                <span>个人介绍：欢迎fork me on github</span>
            </div>
        </div>
        <div class="addMember">
            <div class="addTopBar">
                <h3>添加团队成员</h3>
                <el-input type="text" placeholder="按电话号码搜索" suffix-icon="el-icon-search"></el-input>
            </div>
            <el-row class="teamMem">
                <el-col :span="6">
                    <el-card shadow="hover">
                        <div class="headBox">
                            <div class="cover"></div>
                            <img :src="require('../../../../assets/head.jpeg')">
                        </div>
                        <div class="message">
                            <span>昵称：大大</span>
                            <span>职位：项目成员</span>
                            <!-- <span>个人介绍：欢迎fork欢迎fork欢迎fork欢迎fork欢迎fork</span> -->
                            <el-button type="danger" plain>删除</el-button>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card shadow="hover">
                        <div class="headBox">
                            <div class="cover"></div>
                            <img :src="require('../../../../assets/head.jpeg')">
                        </div>
                        <div class="message">
                            <span>昵称：大大</span>
                            <span>职位：项目成员</span>
                            <!-- <span>个人介绍：欢迎fork欢迎fork欢迎fork欢迎fork欢迎fork</span> -->
                            <el-button type="danger" plain>删除</el-button>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card shadow="hover">
                        <div class="headBox">
                            <div class="cover"></div>
                            <img :src="require('../../../../assets/head.jpeg')">
                        </div>
                        <div class="message">
                            <span>昵称：大大</span>
                            <span>职位：项目成员</span>
                            <!-- <span>个人介绍：欢迎fork欢迎fork欢迎fork欢迎fork欢迎fork</span> -->
                            <el-button type="danger" plain>删除</el-button>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card shadow="hover">
                        <div class="headBox">
                            <div class="cover"></div>
                            <img :src="require('../../../../assets/head.jpeg')">
                        </div>
                        <div class="message">
                            <span>昵称：大大</span>
                            <span>职位：项目成员</span>
                            <!-- <span>个人介绍：欢迎fork欢迎fork欢迎fork欢迎fork欢迎fork</span> -->
                            <el-button type="danger" plain>删除</el-button>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <div class="btnBox">
                <el-button>上一步</el-button>
                <el-button class="next" type="danger">下一步</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
$a-little-blue:rgb(214, 231, 245);
h4{
    margin:0;
    padding: 0;
}
.main{
    >div{
        margin-bottom: 30px;
    }
    h3,h4{
        color: #000;
    }
    .captain{
        height: 120px;
        border-radius: 60px 0 0 60px;
        background: -webkit-linear-gradient(left, $a-little-blue , white); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, $a-little-blue, white); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, $a-little-blue, white); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, $a-little-blue , white); /* 标准的语法 */
        >div{
            display: inline-block;
            vertical-align: middle;
            >span{
                display: block;
                margin-top: 5px;
            }
        }
        >div:first-child{
            height: 100%;
            margin-right: 20px;
        }
        img{
            height:100%;
            border-radius: 50%;
        }
    }
    .teamMem{
        >.el-col{
            padding:10px;
        }
        $width:60px;
        margin-top: 20px;
        .headBox{
            height: 100px;
            // rgb(228, 107, 92);
            // rgba(46, 135, 138, 0.308)
            position: relative;
            margin-bottom: $width/2+20;
            .cover{
                width: 100%;
                height: 100%;
                margin-bottom: $width/2+10;
                background: url(/static/head.jpeg) no-repeat -20% 20%;
                background-size: cover;
                -webkit-filter: blur(2px);
                -moz-filter:blur(2px);
                -ms-filter:blur(2px);
                -o-filter:blur(2px);
                filter:blur(2px);
            }
            img{
                width: $width;
                border-radius: 50%;
                position: absolute;
                bottom: -$width/2;
                left: 50%;
                transform: translate(-50%)
            }
        }
        .message{
            margin-left: 10px;
            margin-bottom: 10px;
            font-size: 14px;
            text-align: center;
            span{
                display:block;
                margin-top: 5px;
            }
            .el-button{
                margin-top:10px;
                margin-bottom: 10px;
            }
        }
    }
    .btnBox{
        margin-top: 20px;
        position: relative;
        .next{
            position: absolute;
            right: 0;
        }
    }
}
</style>
