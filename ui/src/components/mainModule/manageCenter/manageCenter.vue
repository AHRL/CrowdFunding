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
                            <img :src="this.$store.state.user.img" alt="">
                        </el-col>
                        <el-col class="username" :span="16" :offset="3">
                            {{ this.$store.state.user.name }}
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
                    <el-input placeholder="请输入想要查看的项目名" v-model="searchCont" prefix-icon="el-icon-search" @keyup.enter.native="searchProject"></el-input>
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
        <el-dialog
            title="查询结果"
            :visible.sync="searchDialogVisible"
            width="600px">
            <el-table :data="searchResult">
                <el-table-column property="name">
                    <template slot-scope="scope">
                        <a href="javascript:;" @click="goToProject(scope.row.name)">{{ scope.row.name }}</a>
                    </template>
                </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
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
            haveNotRead:false,
            searchDialogVisible:false,
            searchCont:'',
            searchResult:[{
                name:'抹茶大会'
            },{
                name:'互联网大赛'
            }]
        }
    },
    methods: {
        handleSelect(key,keyPath){
            this.activeIndex = key;
        },
        searchProject(){
            if(this.searchCont){
                this.$axios.post('/searchProject',{
                    projectName:this.searchCont
                }).then(res => {
                    this.searchResult = res.data
                    this.searchDialogVisible = true
                }).catch(err => this.$message.error('搜索失败'))
            }else{
                this.$message.warning('搜索项目名不能为空')
            }
        },
        goToProject(name){
            console.log('dd')
        }
    },
    components: {
        survey,
        top,
        messageList
    },
    mounted () {
        this.$axios.get('/getIsNotRead').then(res => this.haveNotRead = res.data).catch(err => console.log(err))
    }
}
</script>
<style lang="scss" scoped>
.manageCenter {
    background: rgb(245, 248, 252);
    padding: 100px 10%;
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
