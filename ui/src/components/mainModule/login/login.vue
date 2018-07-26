<template>
    <el-tabs type="border-card">
        <el-tab-pane label="登录">
            <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px">
                <el-form-item label="手机号" prop="phone">
                    <el-input type="phone" v-model="loginForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="" prop="isWatch">
                    <el-switch v-model="rememberPass" active-text="记住密码" active-color="#ff4949" inactive-color="#ccc"> </el-switch>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button @click="resetLoginForm('loginForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册">
            <el-form :model="registerForm" status-icon :rules="registerRules" ref="registerForm" label-width="100px">
                <el-form-item label="手机号" prop="phone">
                    <el-input type="phone" v-model="registerForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerForm.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认" prop="repeatPass">
                    <el-input type="password" v-model="registerForm.repeatPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="identifyingCode">
                    <el-col :span="6">
                        <el-input type="text" class="identifyingCode" v-model="registerForm.identifyingCode" auto-complete="off"></el-input>
                    </el-col>
                    <el-col :span="6" class="identifyingImg">
                        <img src="" alt="">
                    </el-col>
                    <el-col :span="5">
                        <a href="javascript:;">换一张</a>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="register">注册</el-button>
                    <el-button @click="resetLoginForm('registerForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
// import { Message } from 'element-ui'
import $ from '@/api/axios.init'
export default {
    data() {
      var checkPhone = (rule, value, callback) => {
          console.log(value+','+value.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/))
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!value.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)) {
            callback(new Error('请输入正确的手机号'));
          }else{
              callback()
          }
        }, 1000);
      }
      var validatePass = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入密码'));
        }else{
            callback()
        }
        }
        var checkRegPass = (rule,value,callback) => {
            if(!value){
                callback(new Error('请输入密码'))
            }
            setTimeout(() => {
                if(!value.match(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/)){
                    callback(new Error('密码至少包含英文和数字两种字符'))
                }else {
                    if(value.length < 8){
                        callback(new Error('密码至少8位'))
                    }else{
                        callback()
                    }
                }
            },1000)
        }
        var checkRegRepeatPass = (rule,value,callback) => {
            if(!value){
                callback(new Error('请再次输入密码'))
            }
            setTimeout(() => {
                if(value !== this.registerForm.password){
                    callback(new Error('该密码与上面密码不一致'))
                }else{
                    callback()
                }
            },1000)
        }
        var checkICode = (rule,value,callback) => {
            if(!value){
                callback(new Error('请输入验证码'))
            }else{
                callback()
            }
        }
      return {
        loginForm: {
          phone: '',
          password: ''
        },
        loginRules: {
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        },
        rememberPass: true,
        registerForm: {
            phone:'',
            password:'',
            repeatPass:'',
            identifyingCode:''
        },
        registerRules:{
            phone: [
                { validator: checkPhone, trigger: 'blur' }
            ],
            password: [
                { validator: checkRegPass, trigger: 'blur'}
            ],
            repeatPass: [
                { validator: checkRegRepeatPass, trigger: 'blur'}
            ],
            identifyingCode: [
                { validator: checkICode, trigger: 'blur'}
            ]
        }
      };
    },
    methods: {
      login() {
        let myData = this.loginForm
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            $.post('/login',{
                data: myData
            }).then(res => {
                if(res.data.name){
                    this.$message({
                        message: '登录成功！',
                        type: 'success'
					})
					this.$store.commit('LOGIN_IN',res.data)
                    this.$router.back(-1)
                }else{
                    this.$message({
                        message: '密码错误',
                        type: 'warning'
                    })
                }
            }).catch(error => {
                this.$message({
                    message: '登录异常',
                    type: 'warning'
                })
                console.log(error)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      register(){
          let myData = this.registerForm
					this.$refs.registerForm.validate((valid) => {
					if (valid) {
                        $.post('/register',{
                            data: myData
                        }).then(res => {
                            if(res.data.info === 'suc'){
                                Message({
                                    message: '注册成功,赶快去登录吧'
                                })
                            }else{
                                Message({
                                    message: '注册失败',
                                    type: 'danger'
                                })
                            }
                        }).catch(error => {
                            Message({
                                message: '注册异常',
                                type: 'danger'
                            })
                            console.log(error)
                        })
					} else {
						console.log('error submit!!');
						return false;
					}
				})
			},
      resetLoginForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style scoped>
.el-tabs{
    font-size: 18px;
    width: 40%;
    margin: 200px auto;
}
.el-tab-pane{
    padding-right:50px;
    padding-top: 30px;
}
input.identifyCode{
    width: 50%;
}
.identifyingImg{
    margin-left: 10px;
    margin-right: 20px;
}
</style>
