<template>
    <div class="mySetting">
        <h2>我的设置</h2>
        <el-collapse v-model="activeNames" @change="handleChange">
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
                    <el-dialog title="修改手机号" :visible.sync="dialogChangePhoneVisible">
                        <el-form :model="changePhone" status-icon :rules="changePhoneRules" ref="changePhone">
                            <el-form-item label="新手机号码" :label-width="formLabelWidth" prop="newPhone">
                                <el-input :clearable=true v-model="changePhone.newPhone" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码" :label-width="formLabelWidth">
                                <el-col :sm="13" :md="14" :lg="16" :xl="16">
                                    <el-input :clearable=true v-model="changePhone.vertifyCode" auto-complete="off"></el-input>
                                </el-col>
                                <el-button type="danger" class="sendPhoneCode">发送手机验证码</el-button>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogChangePhoneVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogChangePhoneVisible = false">修 改</el-button>
                        </div>
                    </el-dialog>
                    <el-alert
                        :closable="false"
                        title="邮箱绑定"
                        type="warning"
                        show-icon>
                        <div class="wordTip">绑定邮箱后，可获取最新消息推送，以及项目消息提醒。</div>
                        <el-button plain @click="dialogEmailVisible = true">立即认证</el-button>
                    </el-alert>
                    <el-dialog title="邮箱绑定" :visible.sync="dialogEmailVisible" width="40%">
                        <el-form :model="addEmail">
                            <el-form-item label="请输入邮箱" :label-width="formLabelWidth">
                                <el-input :clearable=true v-model="addEmail.email" auto-complete="off"></el-input>
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
                            <el-button type="primary" @click="dialogEmailVisible = false">绑 定</el-button>
                        </div>
                    </el-dialog>
                    <el-alert
                        :closable="false"
                        title="身份认证"
                        type="warning"
                        show-icon>
                        <div class="wordTip">身份认证后，将立即增加您的信任度。</div>
                        <el-button plain @click="dialogIdentityVisible=true">立即认证</el-button>
                    </el-alert>
                    <el-dialog title="身份认证" :visible.sync="dialogIdentityVisible">
                        <el-form class="upload">
                            <el-form-item label="">
                                <span>请上传本人与身份证正面同框照</span>
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="">
                                <span>请上传本人与身份证反面同框照</span>
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogIdentityVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogwaitIdentityVisible = true">认 证</el-button>
                        </div>
                    </el-dialog>
                    <el-dialog title="上传成功" :visible.sync="dialogwaitIdentityVisible">
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
                        type="warning"
                        show-icon>
                        <div class="wordTip">企业认证后，可发布带有企业标识的众筹项目。</div>
                        <el-button plain @click="dialogCompanyIdentityVisible=true">立即认证</el-button>
                    </el-alert>
                    <el-dialog title="企业认证" :visible.sync="dialogCompanyIdentityVisible">
                        <el-form class="upload">
                            <el-form-item label="">
                                <span>请上传营业执照</span>
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogIdentityVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogwaitIdentityVisible = true">认 证</el-button>
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
                            v-model="value2"
                            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                        </el-rate>
                        <p class="password">密码：<span>*********</span></p>
                        <el-button type="danger" plain @click="dialogChangePWVisible=true">修改密码</el-button>
                    </div>
                </el-alert>
                <el-dialog title="修改密码" :visible.sync="dialogChangePWVisible">
                    <el-form :model="changePassword">
                        <el-form-item label="输入新密码" :label-width="formLabelWidth">
                            <el-input :clearable=true v-model="changePassword.newPassword" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" :label-width="formLabelWidth">
                            <el-col :sm="13" :md="14" :lg="16" :xl="16">
                                <el-input :clearable=true v-model="changePassword.vertifyCode" auto-complete="off"></el-input>
                            </el-col>
                            <el-button type="danger" class="sendPhoneCode">发送手机验证码</el-button>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogChangePWVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogChangePWVisible = true">认 证</el-button>
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
                        <el-switch v-model="phoneMsg"></el-switch>
                    </div>
                    <div>
                        <i class="el-icon-info"></i>
                        <span>是否开启短信推送：</span>
                        <el-switch v-model="phoneMsg"></el-switch>
                    </div>
                    <div>
                        <i class="el-icon-info"></i>
                        <span>是否开启邮件推送：</span>
                        <el-switch v-model="phoneMsg"></el-switch>
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
                if (/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(value)) {
                    callback(new Error('请输入正确的手机号'));
                } else {
                    callback();
                }
            }, 1000);
        };
        return {
            activeNames: ['1','2','3','4'],
            value2:3,
            phoneMsg:'',
            dialogChangePhoneVisible:false,
            changePhone:{
                newPhone:'',
                vertifyCode:''
            },
            changePhoneRules:{
                newPhone:[
                    {validator:checkPhone,trigger:'blur'}
                ]
            },
            dialogEmailVisible:false,
            addEmail:{
                email:'',
                openNotice:''
            },
            dialogIdentityVisible:false,
            imageUrl: '',
            dialogwaitIdentityVisible:false,
            dialogCompanyIdentityVisible:false,
            dialogChangePWVisible:false,
            changePassword:{
                newPassword:'',
                identifyCode:''
            },
            formLabelWidth:'100px',
            tableData:[{
                option:'发布众筹',
                everyCan:true,
                personCan:true,
                companyCan:true
            },{
                option:'私信粉丝',
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
                everyCan:true,
                personCan:true,
                companyCan:true
            },{
                option:'认证标识',
                everyCan:true,
                personCan:true,
                companyCan:true
            }]
        }
    },
    methods: {
        handleChange(){

        },
         handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
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