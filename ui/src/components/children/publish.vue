<template>
    <div>
        <el-row class="pubHeader">
            <h2>发布动态</h2>
            <p>做一个有趣的人，分享有趣的事儿</p>
        </el-row>
        <el-row class="publishText">
            <el-input type="textarea" v-model="pubText" :maxlength="500" :rows="5" resize="none" placeholder="请输入内容..."></el-input>
            <span>{{ pubText.length }}/500</span>
        </el-row>
        <el-row class="pubBottom">
            <div>
                <div @click="voteDialogVisible=true">
                    <i class="fa fa-bar-chart"></i>
                    <span>投票</span>
                </div>
                <div @click="writeArticle">
                    <i class="fa fa-file-text-o"></i>
                    <span>长文</span>
                </div>
                <div>
                    <el-upload
                        class="upload-demo"
                        action="/findProject"
                        :auto-upload=false
                        :before-remove="beforeRemove"
                        multiple
                        :on-change="addFile"
                        accept="image/*"
                        :file-list="fileList">
                        <i class="fa fa-photo"></i>
                        <span>图片</span>
                    </el-upload>
                </div>
                <el-button type="primary" @click="publish">发表</el-button>
            </div>
        </el-row>
        <el-dialog
            title="投票"
            :visible.sync="voteDialogVisible"
            width="40%">
            <p>投票内容</p>
            <el-input type="textarea" row="3" v-model="voteText" resize="none" placeholder="请输入内容..."></el-input>
            <p>结果选项个数</p>
            <el-input v-model="resultNum" placeholder="请输入数字或者任意"></el-input>
            <p>设置选项</p>
            <el-tag
                :key="tag"
                v-for="tag in voteTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="addVote"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput"> + 新选项</el-button>
            <span slot="footer" class="dialog-footer">
                <el-button @click="voteDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="pubVote">发起投票</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import $ from '@/api/axios.init'
import {MessageBox} from 'element-ui'
export default {
    data () {
        return {
            pubText:'',
            fileList: [],
            voteDialogVisible: false,
            voteText:'',
            resultNum:'',
            voteTags: [],
            inputVisible: false,
            addVote: '',
            articleDialogVisible:false
        }
    },
    methods: {
        beforeRemove(file, fileList) {
            return MessageBox.confirm(`确定移除 ${ file.name }？`,'提示',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.fileList.forEach((value,index) => {
                    value.name === file.name && this.fileList.splice(index,1)
                })
                this.$message({
                    type:'info',
                    message:'删除成功'
                })
            })
        },
        addFile(file,fileList){
            let obj = {}
            obj.name = file.name
            obj.url = file.url
            this.fileList.push(obj)
            console.log(this.fileList)
        },
        publish(){
            if(!this.pubText){
                this.$message({
                    type:'info',
                    message:'发表内容不能为空'
                })
            }else{
                $.post('/publish',{
                    pubText:this.publish,
                    fileList:this.fileList
                }).then((res) => {
                    this.pubText = ''
                    this.fileList = {}
                    this.$emit('theLastest',res.data)
                }).catch((err) =>{
                    console.log(err)
                })
            }
        },
        handleClose(tag) {
            this.voteTags.splice(this.voteTags.indexOf(tag), 1);
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
            });
        },

        handleInputConfirm() {
            let addVote = this.addVote;
            if (addVote) {
                this.voteTags.push(addVote);
            }
            this.inputVisible = false;
            this.addVote = '';
        },
        pubVote(){
            if(!this.voteText){
                this.$message({
                    type:'info',
                    message:'投票内容不能为空'
                })
            }else if(this.resultNum != '任意' && isNaN(Number(this.resultNum))){
                this.$message({
                    type:'info',
                    message:'结果个数只能输入数字或者任意'
                })
            }else if(this.voteTags.length == 0){
                this.$message({
                    type:'info',
                    message:'投票选项为空'
                })
            }else if(Number(this.resultNum) > this.voteTags.length){
                this.$message({
                    type:'info',
                    message:'结果选项数不能大于选项数'
                })
            }else{
                $.post('/pubVote',{
                    voteText:this.voteText,
                    resultNum:this.resultNum,
                    voteTags:this.voteTags
                }).then(res => {
                    this.voteDialogVisible = false
                    this.voteText = ''
                    this.voteTags = []
                    this.resultNum = ' '
                    // this.$router.push({
                    //     path:this.$route.fullPath, // 获取当前连接，重新跳转
                    //     query:{
                    //         _time:new Date().getTime()/1000 // 时间戳，刷新当前router
                    //     }
                    // })
                    this.$emit('theLastest',res.data)
                })
            }
        },
        writeArticle(){
            this.$router.push('/writeArticle')
        }
    }
}
</script>
<style lang="scss" scoped>
@mixin flex-style {
    display: flex;
    flex-direction: row;
    align-items: center;
}
h2{
    color:black;
}
.pubHeader {
    @include flex-style;
    position: relative;
    >p {
        position: absolute;
        right: 0;
    }
}

.publishText {
    font-size: 15px;
    position: relative;
    >span {
        position: absolute;
        right: 5px;
        bottom: 5px;
    }
}

.pubBottom>div {
    // @include flex-style;
    position: relative;
    >div {
        margin: 20px 20px 0 0;
        font-size: 16px;
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
        i {
            color: rgb(31, 99, 167);
        }
    }
    /deep/ .el-upload{
        text-align: left;
    }
    >.el-button {
        position: absolute;
        right: 0;
        top: 5px;
    }
}
.el-tag{
    display: block;
    position: relative;
    margin-bottom: 5px;
    /deep/ .el-icon-close{
        position: absolute;
        right: 5px;
        top: 8px;
    }
}
#editor{
    min-height: 500px;
}
</style>
