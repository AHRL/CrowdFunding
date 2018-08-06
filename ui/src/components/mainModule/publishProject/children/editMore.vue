<template>
    <div class="main">
        <div class="upVideo">
            <h4>上传视频</h4>
            <div>
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
        </div>
        <div class="moreIntro">
            <h4>详情介绍</h4>
            <div>
                <div id="editor"></div>
            </div>      
        </div>
        <div class="btnBox">
            <el-button @click="nextStep(-1)">上一步</el-button>
            <el-button class="next" type="danger" @click="nextStep(1)">下一步</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
        nextStep(data){
            this.$emit('nextStep',data)
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
    },
    mounted: function (){
        var E = require('wangeditor')
        var editor = new E('#editor')
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
