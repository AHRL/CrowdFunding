<template>
    <div class="manageCenter">
        <el-row class="main">
            <el-col>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="rgb(238, 240, 243)"
                    text-color="#5eadc7"
                    active-text-color="rgb(90, 87, 87)">
                    <el-row class="manager">
                        <el-col :span="5">
                            <img :src="require('../../../assets/head.jpeg')" alt="">
                        </el-col>
                        <el-col class="username" :span="16" :offset="2">
                            的说法是否水电费第三方
                        </el-col>
                    </el-row>
                    <el-menu-item index="1">
                        <i class="el-icon-view"></i>
                        <span slot="title">概况</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-more"></i>
                        <span slot="title">日榜</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-more"></i>
                        <span slot="title">月榜</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-more"></i>
                        <span slot="title">总榜</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="el-icon-star-on"></i>
                        <span slot="title">消息列表</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的设置</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col class="leftContent" style="height:800px">
                <!-- 网站浏览量 -->
                <!-- 今日注册量 -->
                <!-- 单个项目访问排行 -->
                <!-- 获取金额总和 -->
                <!-- 单个项目筹资金额排行 -->
                <!-- 月成功筹资统计 -->
                <!-- 各类项目筹资情况一览表 -->
                <!-- 消息列表 -->
                <!-- 我的设置 -->
                <div class="topBar">
                    <el-input></el-input>
                </div>
                <survey v-if="activeIndex==='1'"></survey>
                <day-top v-if="activeIndex==='2'"></day-top>
                <month-top v-if="activeIndex==='3'"></month-top>
                <total-top v-if="activeIndex==='4'"></total-top>
                <message-list v-if="activeIndex==='5'"></message-list>
                <setting v-if="activeIndex==='6'"></setting>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import survey from './children/survey'
import dayTop from './children/dayTop.vue'
import monthTop from './children/monthTop'
import totalTop from './children/totalTop'
import messageList from './children/messageList'
import setting from './children/setting'
export default {
    data() {
        return {
            activeIndex:'1'
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {
        survey,
        dayTop,
        monthTop,
        totalTop,
        messageList,
        setting
    }
}
</script>
<style lang="scss" scoped>
.manageCenter {
    background: rgb(245, 248, 252);
    padding: 0 10%;
    padding-top: 100px;
    padding-bottom: 100px;
    .main {
        position: relative;
        background:rgb(252, 246, 246);
        .el-menu {
            position: absolute;
            width: 20%;
            height: 100%;
            border-right: none;
            .el-menu-item.is-active {
                background-color: rgb(252, 246, 246) !important;
            }
            i {
                color: #5eadc7;
            }
        }
    }
}
.manager {
    box-sizing: border-box;
    background: #5eadc7;
    height: 60px;
    padding: 0 20px;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    margin-bottom: 60px;
    img {
        width: 100%;
        border-radius: 50%;
        border: 1px solid #fff;
    }
    .username {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 25px;
    }
}
.leftContent{
    padding-left: 20%;
    .topBar{
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        padding: 10px 20px;
        background: #fff;
        .el-input{
            width: 50%;
            input{
                border-radius: 10px;
            }
        }
    }
}
</style>
