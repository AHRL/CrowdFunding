<template>
    <div class="manageCenter">
        <el-row class="main">
            <el-col>
                <el-menu
                    :default-active="activeIndex"
                    @select="handleSelect"
                    background-color="rgb(238, 240, 243)"
                    text-color="#5eadc7"
                    active-text-color="rgb(90, 87, 87)">
                    <el-row class="manager">
                        <el-col :span="4">
                            <img :src="require('../../../assets/head.jpeg')" alt="">
                        </el-col>
                        <el-col class="username" :span="16" :offset="3">
                            dfgfgfdgfsdgsgfsdytj
                        </el-col>
                    </el-row>
                    <el-menu-item index="1">
                        <i class="el-icon-view"></i>
                        <span slot="title">概况</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-more"></i>
                        <span slot="title">榜单</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-star-on"></i>
                        <span slot="title">消息列表</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col class="leftContent" style="height:800px">
                <div class="topBar">
                    <el-input placeholder="请输入想要查看的项目名" prefix-icon="el-icon-search"></el-input>
                    <div class="topBarRight">
                        <i v-show="!haveNotRead" class="fa fa-envelope-o"></i>
                        <el-badge v-show="haveNotRead" is-dot class="item"><i class="fa fa-envelope-o"></i></el-badge>
                        <!-- <i class="fa fa-envelope-o"></i> -->
                        <!-- <i class="el-icon-setting"></i> -->
                        <span>welcome admin</span>
                    </div>
                </div>
                <survey v-if="activeIndex==='1'"></survey>
                <top v-if="activeIndex==='2'"></top>
                <message-list v-if="activeIndex==='3'"></message-list>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import survey from './children/survey'
import top from './children/top.vue'
import messageList from './children/messageList'
export default {
    data() {
        return {
            activeIndex:'1',
            haveNotRead:false
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(key,keyPath){
            console.log(key,keyPath)
            this.activeIndex = key;
            console.log(this.activeIndex)
        }
    },
    components: {
        survey,
        top,
        messageList
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
        width: 45px;
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
        padding: 15px 20px;
        background: #fff;
        position: relative;
        .el-input{
            width: 50%;
            /deep/ .el-input__inner{
                border-radius: 20px;
                height: 30px;
            }
            /deep/ .el-input__icon{
                line-height:30px;
            }
        }
        .topBarRight{
            position: absolute;
            right: 20px;
            top: 20px;
            i{
                cursor: pointer;
                margin-right: 3px;
            }
            span{
                display: inline-block;
                margin-left: 20px;
            }
        }
    }
}
</style>
