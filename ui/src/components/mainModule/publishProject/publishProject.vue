<template>
    <div class="main">
        <header>
            <img :src="require('@/assets/bg2.jpg')" alt="">
            <div>
                <h1>建立属于自己的项目页面，<br>将您的精彩创意和更多人分享吧！</h1>
                <el-button type="danger">发布项目</el-button>
            </div>
        </header>
        <div class="container">
            <h2>发起众筹</h2>
            <el-steps :active="activeIndex" simple>
                <el-step title="注意事项" icon="el-icon-success"></el-step>
                <el-step title="填写信息" icon="el-icon-success"></el-step>
                <el-step title="详情编辑" icon="el-icon-success"></el-step>
                <el-step title="团队成员" icon="el-icon-success"></el-step>
                <el-step title="等待认证" icon="el-icon-success"></el-step>
            </el-steps>
            <div class="steps">
                <contract v-show="activeIndex === 0" @nextStep="step"></contract>
                <signMessage v-show="activeIndex === 1" @nextStep="step" ref="sign"></signMessage>
                <editMore v-show="activeIndex === 2" @nextStep="step" ref="editMore"></editMore>
                <team v-show="activeIndex === 3" @nextStep="step" ref="team"></team>
                <wait v-show="activeIndex === 4" @nextStep="step"></wait>
            </div>
        </div>
    </div>
</template>
<script>
import contract from './children/contract'
import signMessage from './children/signMessage'
import editMore from './children/editMore'
import wait from './children/wait'
import team from './children/team'
export default {
    name: 'publishProject',
    data() {
        return {
            activeIndex: Number(sessionStorage.getItem('activeIndex'))||0
        }
    },
    methods: {
        step(data){
            this.activeIndex += data
            sessionStorage.setItem('activeIndex',this.activeIndex)
        }
    },
    components: {
        contract,
        signMessage,
        editMore,
        wait,
        team
    },
    beforeRouteLeave (to, from, next) {
        this.$refs.sign.saveData()
        this.$refs.editMore.saveData()
        this.$refs.team.saveData()
        next()
    }
}
</script>
<style lang="scss" scoped>
.main {
    margin: 60px 0;
    >header {
        position: relative;
        >img {
            width: 100%;
        }
        >div {
            position: absolute;
            top: 10%;
            left: 10%;
            color: white;
            .el-button {
                font-size: 16px;
                padding: 15px 30px;
            }
        }
    }
}

.container {
    width: 70%;
    margin: 50px auto;
    h2 {
        color: black;
    }
    .steps {
        margin: 0 auto;
        width: 80%;
    }
}
</style>
