<template>
    <div class="main">
        <div class="upVideo">
            <h4>上传视频</h4>
            <div>
                <el-upload
                    class="avatar-uploader"
                    action=""
                    :on-success="handleVideoSuccess"
                    :before-upload="beforeUploadVideo"
                    :on-progress="uploadVideoProcess"
                    :show-file-list="false">
                    <el-progress v-if="videoFlag == true" type="circle" :percentage="videoUploadPercent"></el-progress>
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
        </div>
        <div class="moreIntro">
            <h4>详情介绍</h4>
            <div>
                <div id="editor" v-html="getEditMore()">
                </div>
            </div>      
        </div>
        <div class="btnBox">
            <el-button @click="nextStep(-1)">上一步</el-button>
            <el-button class="next" type="danger" @click="nextStep(1)">下一步</el-button>
        </div>
    </div>
</template>
<script>
var E = require('wangeditor')
var editor = new E('#editor')
export default {
    data() {
        return {
            videoUrl: '',
            videoFlag:false,
            videoUploadPercent:0
        }
    },
    methods: {
        saveData(){
            sessionStorage.editMore = editor.txt.html()
        },
        nextStep(data){
            if(data === 1){
                if(editor.txt.html() == '<p><br></p>'){
                    this.$message.warning('详情介绍不可为空')
                    return false
                }
            }
            this.saveData()
            this.$emit('nextStep',data)
        },
        getEditMore(){
            return sessionStorage.editMore || ''
        },
        beforeUploadVideo(file){
            console.log(file.raw.type)
            if (['video/mp4', 'video/ogg', 'video/flv','video/avi','video/wmv','video/rmvb'].indexOf(file.raw.type) == -1) {
                this.$message.error('请上传正确的视频格式');
                return false
            }
        },
        uploadVideoProcess(event, file, fileList){
            this.videoFlag = true;
            this.videoUploadPercent = file.percentage.toFixed(0);
        },
        handleVideoSuccess(response, file, fileList){
            this.videoUrl = response.data
        }
    },
    mounted: function (){
        editor.create()
    }
}
</script>
<style lang="scss" scoped> 
.main{
    position: relative;
    .upVideo{
        .avatar-uploader {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            &:hover {
                border-color: #409EFF;
            }
            .avatar-uploader-icon {
                font-size: 40px;
                color: #8c939d;
                width: 100%;
                height: 178px;
                line-height: 178px;
                text-align: center;
            }
            .avatar {
                width: 100%;
                height: 178px;
                display: block;
            }
        }
    }
    h4{
        color:black;
    }
    .moreIntro{
        #editor{
            min-height: 500px;
        }
    }
    .btnBox{
        .el-button{
            position: absolute;
        }
        .next{
            right:0;
        }
    }
}
</style>
