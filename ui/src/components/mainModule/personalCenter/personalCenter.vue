<template>
    <div class="container">
        <el-row class="wrap">
            <div class="sideBar">
                <el-menu class="personMenu" router :default-active="this.$route.path.replace(/.*\/([^\/]+)$/, '$1')" background-color="#5eadc7" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-radio-group>
                        <el-radio-button><i class="fa fa-list-ul"></i></el-radio-button>
                    </el-radio-group>
                    <div class="personMsg">
                        <img :src="require('../../../assets/head.jpeg')">
                        <div>
                            <p>AHRL</p>
                        </div>
                    </div>
                    <el-menu-item index="myMessage">
                        <i class="el-icon-edit-outline"></i>
                        <span slot="title">个人资料</span>
                    </el-menu-item>
                    <el-menu-item index="myActivity">
                        <i class="el-icon-menu"></i>
                        <span slot="title">动态管理</span>
                    </el-menu-item>
                    <el-menu-item index="myProject">
                        <i class="el-icon-document"></i>
                        <span slot="title">项目信息</span>
                    </el-menu-item>
                    <el-menu-item index="mySetting">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的设置</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <el-col class="allContent" :span="22">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isCollapse: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        onSubmit() {
            // console.log(this.$route.options.routers)
        }
    },
    mounted() {
        this.onSubmit()
    }
}
</script>
<style lang="scss" scoped>
.container {
    padding: 60px 0;
    background: rgb(237, 241, 243);
    color: white;
    .wrap {
        width: 80%;
        margin: 40px auto;
        background: #ffffff;
        // padding: 30px 0;
        position: relative;
        padding-left: 220px;
        min-height: 500px;
        .sideBar {
            width: 200px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            .personMenu {
                box-sizing: border-box;
                padding-top: 20px;
                height: 100%;
                .el-menu-vertical-demo:not(.el-menu--collapse) {
                    width: 200px;
                    min-height: 400px;
                }
                .el-menu-item i {
                    color: #fff;
                }
                /deep/ .el-radio-button__inner {
                    background: none;
                    border: none;
                    color: white;
                }
                .personMsg {
                    // padding: 20px;
                    text-align: center;
                    img {
                        width: 50%;
                        border-radius: 50%;
                        border: 2px solid #ffffff;
                        margin-top: 20px;
                    }
                }
            }
        }
        .allContent {
            padding-top: 10px;
        }
    }
}
</style>
