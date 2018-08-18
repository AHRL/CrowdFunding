<template>
    <div class="mySetting">
        <h2>我的设置</h2>
        <el-collapse v-model="activeNames">
            <el-collapse-item title="实名认证" name="1">
                <div>
                    <el-alert
                        :closable="false"
                        title="手机绑定"
                        type="success"
                        show-icon>
                        <div class="wordTip">
                            绑定手机后，您即可享受丰富的手机服务，如手机找回密码、开通手机动态密码等。
                        </div>
                        <el-button plain @click="dialogChangePhoneVisible = true">修改手机号</el-button>
                    </el-alert>
                    <el-dialog title="修改手机号" :visible.sync="dialogChangePhoneVisible" width="600px">
                        <el-form :model="changePhone" status-icon :rules="changePhoneRules" ref="changePhone">
                            <el-form-item label="新手机号码" :label-width="formLabelWidth" prop="newPhone">
                                <el-input :clearable="true" v-model="changePhone.newPhone" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码" :label-width="formLabelWidth" prop="vertifyCode">
                                <el-col :sm="13" :md="14" :lg="13" :xl="13">
                                    <el-input :clearable="true" v-model="changePhone.vertifyCode" auto-complete="off"></el-input>
                                </el-col>
                                <el-button type="danger" class="sendPhoneCode">发送手机验证码</el-button>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogChangePhoneVisible = false">取 消</el-button>
                            <el-button type="primary" @click="changePhoneFn('changePhone')">修 改</el-button>
                        </div>
                    </el-dialog>
                    <el-alert
                        :closable="false"
                        title="邮箱绑定"
                        :type="baseSetting.isBindEmail=='修改邮箱'?'success':'warning'"
                        show-icon>
                        <div class="wordTip">绑定邮箱后，可获取最新消息推送，以及项目消息提醒。</div>
                        <el-button plain @click="dialogEmailVisible = true">{{ baseSetting.isBindEmail }}</el-button>
                    </el-alert>
                    <el-dialog title="邮箱绑定" :visible.sync="dialogEmailVisible" width="600px">
                        <el-form :model="addEmail">
                            <el-form-item label="请输入邮箱" :label-width="formLabelWidth">
                                <el-input :clearable="true" v-model="addEmail.email" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="" :label-width="formLabelWidth">
                                <el-switch
                                    v-model="addEmail.openNotice"
                                    active-text="开启消息通知">
                                </el-switch>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogEmailVisible = false">取 消</el-button>
                            <el-button type="primary" @click="bindEmail">绑 定</el-button>
                        </div>
                    </el-dialog>
                    <el-alert
                        :closable="false"
                        title="身份认证"
                        :type="baseSetting.isBindIdentity=='重新认证'?'success':'warning'"
                        show-icon>
                        <div class="wordTip">身份认证后，将立即增加您的信任度。</div>
                        <el-button plain @click="dialogIdentityVisible=true">{{ baseSetting.isBindIdentity }}</el-button>
                    </el-alert>
                    <el-dialog title="身份认证" :visible.sync="dialogIdentityVisible" width="600px">
                        <el-form class="upload">
                            <el-form-item label="">
                                <span>请上传本人与身份证正面同框照</span>
                                <el-upload
                                    class="avatar-uploader"
                                    action=""
                                    :show-file-list="false"
                                    :on-change="addIDcardFace"
                                    :auto-upload="false">
                                    <img v-if="IDcard.IDcardFace" :src="IDcard.IDcardFace" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="">
                                <span>请上传本人与身份证反面同框照</span>
                                <el-upload
                                    class="avatar-uploader"
                                    action=""
                                    :show-file-list="false"
                                    :auto-upload="false"
                                    :on-change="addIDcardBack">
                                    <img v-if="IDcard.IDcardBack" :src="IDcard.IDcardBack" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogIdentityVisible = false">取 消</el-button>
                            <el-button type="primary" @click="identityIDcard">认 证</el-button>
                        </div>
                    </el-dialog>
                    <el-dialog title="上传成功" :visible.sync="dialogwaitIdentityVisible" width="600px">
                        <el-alert
                            title="上传成功，我们将在3-5个工作日给予回复，可在动态管理->最新消息处查看。"
                            type="success"
                            show-icon>
                        </el-alert>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogwaitIdentityVisible = false,dialogIdentityVisible = false,dialogCompanyIdentityVisible=false">确 定</el-button>
                        </div>
                    </el-dialog>
                    <el-alert
                        :closable="false"
                        title="企业认证"
                        :type="baseSetting.isBindCompany=='重新认证'?'success':'warning'"
                        show-icon>
                        <div class="wordTip">企业认证后，可发布带有企业标识的众筹项目。</div>
                        <el-button plain @click="dialogCompanyIdentityVisible=true">{{ baseSetting.isBindCompany }}</el-button>
                    </el-alert>
                    <el-dialog title="企业认证" :visible.sync="dialogCompanyIdentityVisible" width="600px">
                        <el-form class="upload">
                            <el-form-item label="">
                                <span>请上传营业执照</span>
                                <el-upload
                                    class="avatar-uploader"
                                    action=""
                                    :auto-upload="false"
                                    :on-change="addCompanyImg"
                                    :show-file-list="false">
                                    <img v-if="companyImg" :src="companyImg" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogIdentityVisible = false">取 消</el-button>
                            <el-button type="primary" @click="identifyCompany">认 证</el-button>
                        </div>
                    </el-dialog>
                </div>
            </el-collapse-item>
            <el-collapse-item title="账号安全" name="2">
                <el-alert
                    :closable="false"
                    title=""
                    type="info">
                    <div>
                        <span>当前账号安全等级：</span>
                        <el-rate
                            disabled
                            v-model="baseSetting.passwordRank"
                            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                        </el-rate>
                        <p class="password">密码：<span>*********</span></p>
                        <el-button type="danger" plain @click="dialogChangePWVisible=true">修改密码</el-button>
                    </div>
                </el-alert>
                <el-dialog title="修改密码" :visible.sync="dialogChangePWVisible" width="600px">
                        <el-form :model="changePW" status-icon :rules="changePWRules" ref="changePW">
                            <el-form-item label="旧密码" :label-width="formLabelWidth" prop="oldPassword">
                                <el-input :clearable="true" type="password" v-model="changePW.oldPassword" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="新密码" :label-width="formLabelWidth" prop="newPassword">
                                <el-input :clearable="true" type="password" v-model="changePW.newPassword" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码" :label-width="formLabelWidth" prop="vertifyCode">
                                <el-col :sm="13" :md="14" :lg="13" :xl="13">
                                    <el-input :clearable="true" v-model="changePhone.vertifyCode" auto-complete="off"></el-input>
                                </el-col>
                                <el-button type="danger" class="sendPhoneCode">发送手机验证码</el-button>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogChangePWVisible = false">取 消</el-button>
                            <el-button type="primary" @click="changePWFn('changePW')">修 改</el-button>
                        </div>
                    </el-dialog>
            </el-collapse-item>
            <el-collapse-item title="消息通知" name="3">
                <el-alert
                    class="msg"
                    title=""
                    :closable="false"
                    type="info">
                    <div>
                        <i class="el-icon-info"></i>
                        <span>是否开启系统通知：</span>
                        <el-switch v-model="baseSetting.isOpenNotice" @change="isOpenNoticeFn"></el-switch>
                    </div>
                    <div>
                        <i class="el-icon-info"></i>
                        <span>是否开启短信推送：</span>
                        <el-switch v-model="baseSetting.isOpenMessage" @change="isOpenMessageFn"></el-switch>
                    </div>
                    <div>
                        <i class="el-icon-info"></i>
                        <span>是否开启邮件推送：</span>
                        <el-switch v-model="baseSetting.isOpenEmail" @change="isOpenEmailFn"></el-switch>
                    </div>
                </el-alert>
            </el-collapse-item>
            <el-collapse-item title="权限查看" name="4">
                <el-table
                    :header-cell-style="{background:'rgb(230, 234, 235)',textAlign:'center'}"
                    :cell-style="{textAlign:'center'}"
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                    label="类型"
                    width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.option }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="未认证"
                    width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-circle-check" v-if="scope.row.everyCan"></i>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="个人认证"
                    width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-circle-check" v-if="scope.row.personCan"></i>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="企业认证">
                    <template slot-scope="scope">
                        <i class="el-icon-circle-check" v-if="scope.row.companyCan"></i>
                    </template>
                    </el-table-column>
                </el-table>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
 export default {
    data() {
        let checkPhone = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('手机号码不能为空'));
            }
            setTimeout(() => {
                if (!value.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)) {
                    callback(new Error('请输入正确的手机号'))
                } else if(value == this.$store.state.user.phone){
                    callback(new Error('该手机号与当前手机号相同'))
                } else {
                    setTimeout(() => {
                        this.$axios.post('/canUsePhone',{
                            phone:value
                        }).then(res => {
                            if(res.data == 'error'){
                                callback(new Error('该手机号已被注册，请更改'))
                            }
                            else{
                                callback()
                            }
                        })
                    },1000)
                }
            }, 1000);
        }
        let checkVertifyCode = (rule,value,callback) => {
            if (!value) {
                return callback(new Error('验证码不能为空'));
            }else{
                callback()
            }
        }
        let checkOldPW = (rule,value,callback) => {
            if (!value) {
                return callback(new Error('密码不能为空'));
            }
            setTimeout(() => {
                this.$axios.post('/isPWTrue',{
                    name:this.$store.state.user.name
                }).then(res => !res.data && callback('密码不正确')).catch(err => console.log(err))
            },1000)
        }
        let checkNewPW = (rule,value,callback) => {
            if (!value) {
                return callback(new Error('密码不能为空'));
            }
            setTimeout(() => {
                if(!value.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/)){
                    callback(new Error('密码至少8位且包含英文和数字两种字符'))
                }else if(value == this.changePW.oldPassword){
                    callback(new Error('新密码不能与旧密码相同'))
                }else{
                    callback()
                }
            },1000)
        }
        return {
            activeNames: ['1','2','3','4'],
            phoneMsg:'',
            dialogChangePhoneVisible:false,
            changePhone:{
                newPhone:'',
                vertifyCode:''
            },
            changePhoneRules:{
                newPhone:[
                    {validator:checkPhone,trigger:'blur'}
                ],
                vertifyCode:[
                    {validator:checkVertifyCode,trigger:'blur'}
                ]
            },
            dialogEmailVisible:false,
            addEmail:{
                email:'',
                openNotice:''
            },
            dialogIdentityVisible:false,
            IDcard:{
                IDcardFace:'',
                IDcardBack:''
            },
            companyImg:'',
            dialogwaitIdentityVisible:false,
            dialogCompanyIdentityVisible:false,
            dialogChangePWVisible:false,
            changePW:{
                oldPassword:'',
                newPassword:'',
                vertifyCode:''
            },
            changePWRules:{
                oldPassword:[{validator:checkOldPW,trigger:'blur'}],
                newPassword:[{validator:checkNewPW,trigger:'blur'}],
                vertifyCode:[{validator:checkVertifyCode,trigger:'blur'}]
            },
            formLabelWidth:'100px',
            tableData:[{
                option:'发布众筹',
                everyCan:true,
                personCan:true,
                companyCan:true
            },{
                option:'发布评论',
                everyCan:true,
                personCan:true,
                companyCan:true
            },{
                option:'众筹结算',
                everyCan:false,
                personCan:true,
                companyCan:true
            },{
                option:'认证标识',
                everyCan:false,
                personCan:true,
                companyCan:true
            }],
            baseSetting:{
                isBindEmail:'修改邮箱',
                isBindIdentity:'重新认证',
                isBindCompany:'重新认证',
                passwordRank:4,
                isOpenNotice:false,
                isOpenMessage:false,
                isOpenEmail:false,
            }
        }
    },
    methods: {
        changePhoneFn(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios.post('/changePhone',{
                        newPhone:this.changePhone.newPhone,
                        vertifyCode:this.changePhone.vertifyCode
                    }).then(res => {
                        this.$store.commit('CHANGE_PHONE',res.data)
                        this.dialogChangePhoneVisible = false
                    }).catch(err => console.log(err))
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        bindEmail(){
            this.$axios.post('/changePhone',{
                email:this.addEmail.email,
                vertifyCode:this.addEmail.openNotice
            }).then(res => console.log(res.data)).catch(err => console.log(err))
            this.dialogEmailVisible = false
        },
        addIDcardFace(file){
            this.IDcard.IDcardFace = file.url
        },
        addIDcardBack(file){
            this.IDcard.IDcardBack = file.url
        },
        identityIDcard(){
            if(this.IDcard.IDcardFace && this.IDcard.IDcardBack){
                this.$axios.post('/identityIDcard',{
                    IDcard:this.IDcard
                }).then(res => this.dialogwaitIdentityVisible = true).catch(err => console.log(err))
            }else{
                this.$message.warning('请上传照片')
            }
        },
        addCompanyImg(file){
            this.companyImg = file.url
        },
        identifyCompany(){
            if(this.companyImg){
                this.$axios.post('/identifyCompany',{
                    IDcard:this.companyImg
                }).then(res => this.dialogwaitIdentityVisible = true).catch(err => console.log(err))
            }else{
                this.$message.warning('请上传照片')
            }
        },
        changePWFn(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios.post('/changePW',{
                        changePW:this.changePW
                    }).then(res => {

                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        isOpenNoticeFn(res){
            console.log(res)
            this.$axios.post('/isOpenNotice',{
                name:this.$store.state.user.name,
                statu:res
            }).then(res => '').catch(err => console.log(err))
        },
        isOpenMessageFn(res){
            this.$axios.post('/isOpenMessage',{
                name:this.$store.state.user.name,
                statu:res
            }).then(res => '').catch(err => console.log(err))
        },
        isOpenEmailFn(res){
            this.$axios.post('/isOpenEmail',{
                name:this.$store.state.user.name,
                statu:res
            }).then(res => '').catch(err => console.log(err))
        }
    },
    mounted () {
        this.$axios.get('/getSetting').then(res => {
            this.baseSetting = res.data
        }).catch(err => console.log(err))
    }
  }
</script>
<style lang="scss" scoped>
    .mySetting{
        color: black;
        padding-bottom: 20px;
        .el-alert{
            padding: 20px;
            margin-bottom: 10px;
            position: relative;
            .el-button{
                width: 120px;
                position: absolute;
                right: 10px;
                bottom: 25px;
            }
            /deep/ .el-rate{
                display: inline-block;
                position: relative;
                top: -3px;
                .el-rate__icon{
                    font-size: 28px;
                }
            }
            .password{
                &>span{
                    position: relative;
                    top:3px;
                }
            }
        }
        .msg{
            i{
                color: orange;
            }
        }
        .el-icon-circle-check{
            color:#67C23A
        }
        .sendPhoneCode{
            margin-left: 20px;
        }
        .upload{
            /deep/ .avatar-uploader .el-upload {
                margin:0 auto;
                width: 300px;
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
            }
            /deep/ .avatar-uploader .el-upload:hover {
                border-color: #409EFF;
            }
            /deep/ .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 178px;
                height: 178px;
                line-height: 178px;
                text-align: center;
            }
            /deep/ .avatar {
                width: 300px;
                height: 178px;
                display: block;
            }
        }
    }
</style>