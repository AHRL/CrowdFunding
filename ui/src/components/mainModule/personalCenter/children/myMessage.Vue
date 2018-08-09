<template>
    <el-col class="myMessage" :span="24" data-content="个人资料">
        <el-col :span="17">
            <el-form :model="_form" label-width="80px">
                <el-form-item label="昵称">
                    <el-input v-model="_form.name" @blur="isRepeatName"></el-input>
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input v-model="_form.phone" disabled></el-input>
                </el-form-item>
                <el-form-item label="实名认证">
                    <el-switch v-model="_form.certification"></el-switch>
                </el-form-item>
                <el-form-item label="生日">
                    <el-col :span="24">
                    <el-date-picker
                        v-model="_form.birthDate"
                        type="date"
                        @change="dateChange"
                        format="yyyy-MM-dd"
                        placeholder="选择日期">
                    </el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="所在地">
                    <el-col :span="11">
                        <el-input placeholder="省份/直辖市" v-model="_form.province"></el-input>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <el-input placeholder="县" v-model="_form.city"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="个人说明">
                    <el-input type="textarea" :maxlength="200" :rows="3" resize="none" v-model="_form.intro"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="onSubmit">保存</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col class="changeHeadImg" :span="5" :offset="2">
            <div class="headImg" :style="{backgroundImage: 'url(' + this.$store.state.user.img + ')' }">
                <el-upload
                    class="avatar-uploader"
                    action="/changeImg"
                    :on-success="handleSuccess"
                    :show-file-list="false">
                    <img v-if="this.$store.state.user.img" :src="this.$store.state.user.img">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
            <div>
                <div>
                    <a href="javascript:;" @click="focusDialog = !focusDialog">{{ _form.focusNum }}</a>
                    <span>关注</span>
                </div>
                <div>
                    <a href="javascript:;" @click="fansDialog = !fansDialog">{{ _form.fansNum }}</a>
                    <span>粉丝</span>
                </div>
            </div>
            <el-dialog
                class="teamMember"
                title="关注"
                :visible.sync="focusDialog"
                width="500px">
                    <el-row v-for="(item,i) in _form.focus" :key="i">
                        <el-col :span="3" :offset="1">
                            <img :src="item.img" @click="goPersonPage(item.name)">
                        </el-col>
                        <el-col :span="15" :offset="1">
                            <h3 @click="goPersonPage(item.name)">{{item.name}}</h3>
                        </el-col>
                        <el-col :span="4">
                            <el-button @click="isFocus(item.name,i)" size="small" type="danger" round>{{ item.isFocus }}</el-button>
                        </el-col>
                    </el-row>
            </el-dialog>
            <el-dialog
                class="teamMember"
                title="粉丝"
                :visible.sync="fansDialog"
                width="500px">
                   <el-row v-for="(item,i) in _form.focus" :key="i">
                        <el-col :span="3" :offset="1">
                            <img :src="item.img" @click="goPersonPage(item.name)">
                        </el-col>
                        <el-col :span="15" :offset="1">
                            <h3 @click="goPersonPage(item.name)">{{item.name}}</h3>
                        </el-col>
                        <el-col :span="4">
                            <el-button @click="isFocus(item.name,i)" size="small" type="danger" round>{{ item.isFocus }}</el-button>
                        </el-col>
                    </el-row>
            </el-dialog>
        </el-col>
    </el-col>
</template>
<script>
export default {
    data () {
        return {
            focusDialog:false,
            fansDialog:false,
            focus:[{
                name:'tianyu',
                img:'https://p.moimg.net/project/project_20180612_1528793315_6404_crop.png?imageMogr2/auto-orient/strip',
                isFocus:'+ 关注'
            },{
                name:'aaa',
                img:'https://p.moimg.net/project/project_20180612_1528793315_6404_crop.png?imageMogr2/auto-orient/strip',
                isFocus:'已关注'
            }]
        }
    },
    computed: {
        _form:{
            get:function () {
                console.log('aaa')
                return this.$store.state.user
            },
            set:function (val) { 
                form = val
             }
        }
    },
    methods: {
        onSubmit() {
            if(this.form.name == ''){
                this.$message.warning('昵称不能为空')
            }else if(this.form.phone != this.$store.state.user.phone){
                this.$message.warning('手机号不能在此处直接修改，可查看我的设置')
            }else{
                this.$axios.post('/commitMyMsg',{
                    msg:this.form
                }).then(res => {
                    if(res.data.state == 'suc'){
                        this.$store.commit('LOGIN_IN',res.data.msg)
                        this.$message.success('保存成功')
                    }else{
                        this.$message.warning('该昵称已被注册')
                    }
                }).catch(err => {
                    this.$message.error('保存失败，请重试')
                })
            }
        },
        dateChange(val){
            this.form.date = val.getTime()
        },
        isRepeatName(){
            this.$axios.post('/isRepeatName',{
                name:this.form.name
            }).then(res => {
                if(res.data == 'error'){
                    this.$message.warning('该昵称已被注册，请更改')
                }
            })
        },
        handleSuccess(res,file){
            this.$store.commit('CHANGE_IMG',res.data)
        },
        goPersonPage(name){
            this.$router.push('/user/'+name)
        }, 
        isFocus(val,i){
            console.log(typeof(this.$store.state.user.focusNum))
            let focus = this._form.focus         
            focus[i].isFocus === '已关注' ? focus[i].isFocus = '+ 关注': focus[i].isFocus = '已关注'
            if(focus[i].isFocus === '已关注'){
                this.$store.commit('CHANGE_FOCUSNUM',this.$store.state.user.focusNum + 1)
            }else{
                this.$store.commit('CHANGE_FOCUSNUM',this.$store.state.user.focusNum - 1)
            }
            clearTimeout(focus.timer)
            focus.timer = setTimeout(() => {
                this.$axios.post('/isFocus',{
                    user:this.$store.state.user.name,
                    name:val
                }).then(res => {
                    this.$store.commit('CHANGE_FOCUS',res.data)
                }).catch(err => {
                    console.log(err)
                })
            },2000)
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
            width: 160px;
            height: 160px;
            overflow: hidden;
            margin: 0 auto;
            font-size: 0;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            img {
                width: 100%;
                cursor: pointer;
                opacity: 0;
                filter: alpha(opacity=0);
            }
            &:hover {
                opacity: 0.6;
                filter: alpha(opacity=60);
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
                    font-size: 0.8em;
                    display: inline-block;
                    &:first-child {
                        padding-right: 10px;
                        margin-right: 10px;
                        border-right: 1px solid rgb(233, 230, 230);
                    }
                }
            }
        }
    }
    .teamMember{
        text-align: left;
        .el-row{
            margin: 10px 0;
        }
        img{
            width: 45px;
            border-radius: 50%;
            cursor:pointer;
        }
        h3{
            line-height: 45px;
            margin: 0;
            cursor:pointer;
        }
        .el-button{
            margin-top: 7px;
        }
    }
}
</style>
