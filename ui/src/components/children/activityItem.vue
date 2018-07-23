<template>
    <el-row class="one">
        <el-row>
            <el-col class="authorBox">
                <img :src="item.userImg" alt="">
                <div>
                    <span>{{ item.userName }}</span>
                    <span>{{ item.publishTime }} · 发布{{ item.publishType }}</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <p>
                {{ item.publishContent }}
            </p>
            <div v-if="item.img.length>0" class="photoWall">
                <el-row v-if="item.img.length == 1">
                    <el-col :span="24">
                        <img :src="item.img[0]" />
                    </el-col>
                </el-row>
                <el-row v-else-if="item.img.length > 1&&item.img.length<=4">
                    <el-col :span="12" v-for="(item,i) in item.img" :key="i">
                        <img :src="item" alt="">
                    </el-col>
                </el-row>
                <el-row v-else-if="item.img.length > 4 && item.img.length <= 9">
                    <el-col :span="8" v-for="(item,i) in item.img" :key="i">
                        <img :src="item" alt="">
                    </el-col>
                </el-row>
                <el-row v-else-if="item.img.length > 9">
                    <el-col :span="8" v-for="(item,i) in item.img" :key="i" v-if="i < 8">
                        <img :src="item" alt="">
                    </el-col>
                </el-row>
            </div>
        </el-row>
            <el-row class="operations">
            <span><i class="fa fa-share"></i>分享</span>
            <span><i class="fa fa-comment"></i>{{item.commentNum}}条评论</span>
            <span><i class="fa fa-thumbs-up"></i>{{ item.supportNum }}赞</span>
        </el-row>
        <el-row class="comment">
            <el-row v-for="(val,i) in item.comments" :key="i">
                <el-row class="oneCom">
                    <el-col :span="1">
                        <img class="headImg" :src="val.com.comImg" alt="">
                    </el-col>
                    <el-col :span="19">
                        <span class="commentName">{{ val.com.comName }} · {{ val.com.comTime }}</span>
                        <span class="comContent">{{ val.com.comCont }}</span>
                    </el-col>
                    <el-col :span="3" class="comAndsup">
                        <i class="fa fa-comment"></i>
                        <span><i class="fa fa-thumbs-up"></i>{{ val.com.supportNum }}</span>
                    </el-col>
                </el-row>
                <el-row class="oneCom" v-for="(son,i) in val.reply" :key="i">
                    <el-col :span="1" :offset="2">
                        <img class="headImg" :src="son.repImg" alt="">
                    </el-col>
                    <el-col :span="16">
                        <span class="commentName">{{ son.repName }} · {{ val.com.comTime }}</span>
                        <span class="comContent">{{ son.repCont }}</span>
                    </el-col>
                    <el-col :span="4" class="comAndsup">
                        <i class="fa fa-comment"></i>
                        <span><i class="fa fa-thumbs-up"></i>{{ son.supportNum }}</span>
                    </el-col>
                </el-row>
            </el-row>
            <el-row class="moreComment">
                <span>查看全部{{ item.commentNum }}条评论<i class="el-icon-caret-right"></i></span>
            </el-row>
            <el-row class="myCom">
                <el-col :span="23">
                    <img class="headImg" :src="item.userImg" alt="">
                    <el-input placeholder="请登录后发表评论" suffix-icon="el-icon-picture"></el-input>
                    <i class="fa fa-arrow-right"></i>
                </el-col>
            </el-row>
        </el-row>
    </el-row>
</template>
<script>
export default {
    props: {
        item:Object
    }
}
</script>
<style lang="scss" scoped>
$black:black;
@mixin flex-style {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.one {
    margin-top: 30px;
    .authorBox {
        @include flex-style;
        >img {
            width: 40px;
            border-radius: 50%;
        }
        >div {
            margin-left: 10px;
            & :first-child {
                font-weight: 600;
                color: $black;
            }
            & :nth-child(2) {
                font-size: 14px;
                display: block;
                margin-top: 5px;
            }
        }
    }
    p{
        color: $black;
    }
    .photoWall {
        .el-col {
            padding: 5px;
            img {
                width: 100%;
            }
        }
    }
    .operations {
        font-size: 14px;
        margin: 10px 0;
        >span {
            margin-right: 20px;
            >i {
                margin-right: 5px;
            }
        }
    }
    .comment {
        margin: 20px;
        padding: 10px;
        .oneCom{
            margin-top: 10px;
        }
        .comAndsup{
            text-align: right;
        }
        .headImg {
            width: 30px;
            border-radius: 50%;
        }
        & :first-child {
            margin-right: 10px;
        }
        & :nth-child(2) {
            padding-top: 5px;
            font-size: 14px;
            .comContent {
                display: block;
                color: $black;
            }
            .commentName {
                color: #4d7da5;
            }
        }
        .moreComment {
            font-size: 16px;
            text-align: center;
            margin: 20px 0;
            a {
                color: #4d7da5;
                text-decoration: none;
            }
        }
        .myCom {
            >.el-col {
                @include flex-style;
                i {
                    position: relative;
                    left: -25px;
                    top: 3px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>

