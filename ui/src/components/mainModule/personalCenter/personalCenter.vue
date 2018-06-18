<template>
    <div class="container">
        <el-row class="wrap">
            <div class="sideBar">
                <el-menu class="personMenu" default-active="1" background-color="#5eadc7" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-radio-group v-model="isCollapse">
                        <el-radio-button :label="isCollapse?false:true"><i class="fa fa-list-ul"></i></el-radio-button>
                        <!-- <el-radio-button :label="true">收起</el-radio-button> -->
                    </el-radio-group>
                    <div class="personMsg">
                        <img :src="require('../../../assets/head.jpeg')">
                        <div>
                            <p>AHRL</p>
                        </div>
                    </div>
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">个人资料</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">动态管理</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">项目信息</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的设置</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <el-col :span="22" data-content="个人资料">
                <el-col :span="17">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="昵称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="实名认证">
                            <el-switch v-model="form.delivery"></el-switch>
                        </el-form-item>
                        <el-form-item label="生日">
                            <el-col :span="24">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="所在地">
                            <el-col :span="11">
                                <el-input placeholder="省份/直辖市"></el-input>
                            </el-col>
                            <el-col :span="11" :offset="2">
                                <el-input placeholder="县/市"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="个人说明">
                            <el-input type="textarea" :maxlength="200" :rows="3" resize="none" v-model="form.desc"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button>还原</el-button>
                            <el-button type="danger" @click="onSubmit">保存</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col class="changeHeadImg" :span="5" :offset="2">
                    <div class="headImg">
                        <img :src="require('../../../assets/head.jpeg')" alt="上传头像" title="上传头像">
                    </div>
                    <!-- <el-button>更换头像</el-button> -->
                    <div>
                        <div>
                            <a href="javascript:;">6</a>
                            <span>关注</span>
                        </div>
                        <div>
                            <a href="javascript:;">4</a>
                            <span>粉丝</span>
                        </div>
                    </div>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import personalCenter from './index.js'
export default personalCenter
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>
