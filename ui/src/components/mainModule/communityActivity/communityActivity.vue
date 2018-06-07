<template>
    <div class="container">
        <el-row>
            <el-col :span="16">
                <el-row>
                    <h1>发布动态</h1>
                    <span>做一个有趣的人，分享有趣的事儿</span>
                </el-row>
                <el-row>
                    <el-input class="publishText" type="textarea" resize="none" rows="5" placeholder="请输入内容..."></el-input>
                    <span>0/500</span>
                </el-row>
                <el-row>
                    <div>
                        <div></div>
                    </div>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.container{
    width: 85%;
    margin: 50px auto;
}
.publishText{
    font-size: 16px;
    resize: none;
}
</style>
