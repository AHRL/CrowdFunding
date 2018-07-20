<template>
  <el-col :span="6">
    <el-card shadow="hover">
        <div>
            <img class="itemImg" :src="item.imgUrl" />
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
  props:{
		imgUrl: String,
		header: String,
		authorHeadUrl: String,
		authorName: String,
		description: String,
		money: Number,
		progress: Number,
		followerNum: Number,
		commentNum: Number
	},
  data () {
    return {
      item:{
            imgUrl: this.imgUrl,
            header: this.header,
            authorHeadUrl: this.authorHeadUrl,
            authorName: this.authorName,
            description: this.description,
            money: this.money,
            progress: this.progress,
            followerNum: this.followerNum,
            commentNum: this.commentNum
        }
    }
	},
	mounted () {
		console.log(this.item)
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
        color: rgb(97, 96, 96);
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
