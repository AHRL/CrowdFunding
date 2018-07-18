<template>
  <el-col :span="6">
    <el-card shadow="hover">
        <div>
            <img class="itemImg" :src="require('@/assets/2.jpg')" />
        </div>
        <div class="itemContent">
            <h3>{{ item.header }}</h3>
            <p class="author">
                <img :src="item.authorHeadUrl" alt="">
                <span>{{ item.authorName }}</span>
            </p>
            <div>
                <div class="moneyData">
                    <span class="money">￥{{ item.money }}</span>
                    <span>{{ item.progress }}%</span>
                </div>
                <el-progress :percentage="item.progress" :show-text=false></el-progress>
            </div>
            <p class="moneyTopFol">{{ item.followerNum }} 支持者</p>
        </div>
    </el-card>
</el-col>
</template>
<script>
export default {
  data () {
    return {
      item:{
            imgUrl: require('@/assets/2.jpg'),
            header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
            authorHeadUrl: require('@/assets/head.jpeg'),
            authorName: 'tianyu',
            description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
            money: 220657.46,
            progress: 40,
            followerNum: 1773,
            commentNum: 157
        }
    }
  }
}
</script>
<style lang="scss" scoped>
@mixin author-style {
    .author {
        @include flex-style;
        img {
            width: 20px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
}

@mixin money-style {
    .moneyData {
        @include flex-style;
        justify-content: space-between;
        .money {
            font-weight: 700;
            font-size: 20px;
            color: rgb(80, 145, 175);
        }
    }
}
@mixin flex-style {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.items {
    border-top: 1px solid rgb(240, 239, 239);
    padding-top: 20px;
    @include author-style;
    @include money-style;
    .itemImg {
        width: 100%;
    }
    .itemContent {
        padding: 10px;
        color: rgb(151, 151, 151);
        .money {
            font-size: 16px;
        }
    }
    .author,
    .moneyTopFol {
        font-size: 14px;
    }
    >.el-col {
        padding: 10px;
    }
    +.pages {
        margin-top: 30px;
        .el-pagination {
            text-align: center;
        }
    }
}
</style>
