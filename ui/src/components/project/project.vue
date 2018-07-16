<template>
    <el-row class="project">
        <el-row>
            <el-col :span="15">
                <h1>中文战棋桌游系列《突出部战役》《加查拉》《红色台风》</h1>
                <img :src="require('@/assets/2.jpg')" alt="">
                <p>
                    作为香蕉桌游中文战棋项目的第一波，这次选择的是玩家们最为熟悉的二战题材，三款桌游分别来自于西线、东线和北非的对应战役，Revolution Games和Kokusai-Tsushin分别出版过美版和日版，适合新手入门和初步进阶的战棋玩家。
                </p>
            </el-col>
            <el-col :span="8" :offset="1">
                <el-row class="headBox">
                    <el-col :span="16">
                        <h2 @click="dialogVisible = true">tianyu<i class="el-icon-caret-bottom"></i></h2>
                        <span>发起了这个项目</span>
                        <div>
                            <el-tag size="medium" type="success" color="white"><i class="fa fa-shield"></i>企业认证</el-tag>
                        </div>
                        <div class="headBottom">
                            <i class="el-icon-location"></i>
                            <span>四川</span>
                            <span>,</span>
                            <span>成都</span>
                            <span class="cut-off-rule">|</span>
                            <i class="fa fa-tag"></i>
                            <span>游戏</span>
                        </div>
                    </el-col>
                    <el-dialog
                        class="teamMember"
                        title="团队成员"
                        :visible.sync="dialogVisible"
                        width="30%">
                            <el-row>
                                <el-col :span="3">
                                    <img :src="require('@/assets/head.jpeg')" >
                                </el-col>
                                <el-col :span="13" :offset="1">
                                    <h3>tianyu</h3>
                                    <span>项目发起者</span>
                                </el-col>
                                <el-col :span="6">
                                    <el-button type="danger" round>+ 关注</el-button>
                                </el-col>
                            </el-row>
                    </el-dialog>
                    <el-col :span="7">
                        <img class="headImg" :src="require('@/assets/head.jpeg')" alt="">
                    </el-col>
                </el-row>
                <el-row class="details">
                    <span>已筹¥323,123,30</span>
                    <el-progress :percentage="70" :show-text=false></el-progress>
                    <div class="targetMoney">
                        <span>目标金额¥12,000</span>
                        <span>203.3%</span>
                    </div>
                    <div class="remainingTime">
                        <i class="el-icon-time"></i>
                        <span>剩余时间</span>
                        <span>16天</span>
                    </div>
                    <div class="supporter">
                        <i class="fa fa-heart"></i>
                        <span>支持人数</span>
                        <span>76人</span>
                    </div>
                    <div class="moneySupport">
                        <div>
                            <i class="fa fa-cny"></i>
                            <span>立即支持</span>
                        </div>
                        <span><i class="fa fa-star"></i>关注</span>
                    </div>
                    <p>此项目须在 2018-07-30 20:00 前达到 ¥12,000 的目标才可成功</p>
                </el-row>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="项目详情" name="first"></el-tab-pane>
                    <el-tab-pane label="评论" name="second"></el-tab-pane>
                    <el-tab-pane label="支持者" name="third"></el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="15">
                <p>dafsafsd</p>
            </el-col>
            <el-col :span="8" :offset="1">
                <div>
                    <h2>风险提示</h2>
                    <p>1. 您参与众筹是支持将创意变为现实的过程，而不是直接的商品交易，因此存在一定风险。请您根据自己的判断选择、支持众筹项目。</p>
                    <p>2. 众筹存在于发起人与支持者之间，摩点作为第三方平台，只提供网络空间、技术支持等服务。众筹的回报产品和承诺由发起人提供和作出，摩点不参与和担保众筹</p>
                </div>
                <div class="otherProject">
                    <h2>团队其他项目</h2>
                    <div>
                        <h3>最萌全家福~</h3>
                        <img src="@/assets/2.jpg">
                        <p>您参与众筹是支持将创意变为现实的过程，而不是直接的商品交易，因此存在一定风险。请您根据自己的判断选择、支持众筹项目。</p>
                        <el-button type="primary">查看详情</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </el-row>
</template>
<script>
export default {
    data () {
        return {
            dialogVisible:false,
            activeName: 'second'
        }
    }
}
</script>
<style scoped>
    .project{
        width: 100%;
        background: rgba(248, 252, 253, 0.74);
        color: black;
    }
    .project>.el-row{
        width: 85%;
        margin: 100px auto;
    }
    .headBox h2{
        margin-bottom: 5px;
    }
    img{
        width:100%;
    }
    .headBox .headImg{
        border-radius: 50%;
        margin-top: 30px;
    }
    .headBox span{
        font-size: 14px;
    }
    .headBox .el-tag{
        color: rgb(8, 190, 236);
        margin:10px 0;
    }
    .headBox .el-tag i{
        margin-right: 5px;
    }
    .headBottom span,.headBottom i{
        font-size: 16px;
        color: rgb(122, 122, 122);
    }
    .headBottom .cut-off-rule{
        margin: 0 20px;
        color: #ccc;
    }
    .teamMember img{
        border-radius: 50%;
    }
    .teamMember h3{
        margin: 0;
    }
    .details{
        margin: 30px 0;
        padding: 30px 0;
        border-top: 1px solid rgb(226, 226, 226);
        border-bottom: 1px solid rgb(226, 226, 226);
    }
    .details>span{
        color: #409EFF;
        font-size: 2.2em;
        font-weight: 600;
    }
    .details .el-progress{
        margin: 10px 0;
    }
    .details .targetMoney{
        width: 100%;
        position: relative;
        color: rgb(104, 101, 101);
    }
    .details .targetMoney span:last-child{
        position: absolute;
        right: 0;
    }
    .remainingTime,.supporter{
        margin-top: 20px;
    }
    .remainingTime span:last-child,.supporter span:last-child{
        font-weight: 600;
        font-size: 2.2em;
        color: rgb(255, 94, 0);
        margin-left: 10px;
    }
    .moneySupport{
        margin: 2em 0;
    }
    .moneySupport>div{
        width: 60%;
        background: #409EFF;
        padding: 20px;
        text-align: center;
        color:#fff;
        display: inline-block;
        cursor: pointer;
    }
    .moneySupport>div>i{
        display: inline-block;
        padding: 3px 7px;
        background: white;
        border-radius: 50%;
        color: #409EFF;
    }
    .moneySupport>span{
        margin-left: 10px;
        color: rgb(104, 101, 101);
        cursor: pointer;
    }
    .moneySupport>span>i{
        margin-right: 3px;
        color: rgb(255, 94, 0);
    }
    .el-tabs{
        margin-top: 30px;
    }
    h2{
        border-bottom: 1px solid rgb(226, 226, 226);
        padding: 10px 0;
    }
    .otherProject img{
        width:50%;
    }
    .otherProject p{
        color: rgb(92, 91, 91);
    }
</style>
