<template>
    <el-col class="myMessage" :span="24" data-content="个人资料">
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
                <img :src="require('../../../../assets/head.jpeg')" alt="上传头像" title="上传头像">
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
</template>
<script>
export default {
    data () {
        return {
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
    }
}
</script>
<style lang="scss" scoped>
.myMessage {
    margin: 40px 0;
    padding-top: 60px;
    border-top: 1px solid #eceaea;
    position: relative;
    .el-form {
        margin-bottom: 50px;
        position: relative;
        .el-form-item:last-child {
            position: absolute;
            right: 0;
            bottom: -80px;
        }
    }
    &::after {
        content: attr(data-content);
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 18px;
        width: 7rem;
        padding: 0 1rem;
        overflow: hidden;
        text-align: right;
        color: rgba(255, 255, 255, .9);
        background: linear-gradient(45deg, transparent 0%, transparent 30%, #e5645e 30%, #e5645e 100%)
    }
    .changeHeadImg {
        text-align: center;
        .headImg {
            background: #000;
            font-size: 0;
            img {
                width: 100%;
                cursor: pointer;
                &:hover {
                    opacity: 0.6;
                    filter: alpha(opacity=60);
                }
            }
            +div {
                color: rgb(129, 125, 125);
                margin-top: 10px;
                a {
                    text-decoration: none;
                    color: black;
                    font-weight: 600;
                    display: block;
                }
                >div {
                    font-size: 14px;
                    display: inline-block;
                    &:first-child {
                        padding-right: 20px;
                        margin-right: 20px;
                        border-right: 1px solid rgb(233, 230, 230);
                    }
                }
            }
        }
    }
}
</style>
