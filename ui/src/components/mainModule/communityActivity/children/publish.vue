<template>
    <div>
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
    </div>
</template>
<script>
export default {
    data () {
        return {
            pubText:''
        }
    }
}
</script>
<style lang="scss" scoped>
@mixin flex-style {
    display: flex;
    flex-direction: row;
    align-items: center;
}
h2{
    color:black;
}
.pubHeader {
    @include flex-style;
    position: relative;
    >p {
        position: absolute;
        right: 0;
    }
}

.publishText {
    font-size: 15px;
    position: relative;
    >span {
        position: absolute;
        right: 5px;
        bottom: 5px;
    }
}

.pubBottom>div {
    @include flex-style;
    position: relative;
    >div {
        margin: 20px 20px 0 0;
        font-size: 16px;
        cursor: pointer;
        >i {
            color: rgb(31, 99, 167);
        }
    }
    >.el-button {
        position: absolute;
        right: 0;
        top: 5px;
    }
}
</style>
