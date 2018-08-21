<template>
  <el-col :xs="12" :sm="12" :md="8" :lg="6">
    <el-card shadow="hover">
        <div>
            <img class="itemImg" :src="project.imgUrl" />
        </div>
        <div class="itemContent">
            <h3>{{ project.header }}</h3>
            <p class="author">
                <img :src="project.authorHeadUrl" alt="">
                <span>{{ project.authorName }}</span>
            </p>
            <div>
                <div class="moneyData">
                    <span class="money">￥{{ project.money }}</span>
                    <span>{{ project.progress }}%</span>
                </div>
                <el-progress :percentage="project.progress" :show-text=false></el-progress>
            </div>
            <p class="moneyTopFol">{{ project.followerNum }} 支持者</p>
        </div>
    </el-card>
</el-col>
</template>
<script>
export default {
  props:{
		project:Object
	},
  data () {
    return {
        
      }
    },
	mounted () {
		console.log(this.project)
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
