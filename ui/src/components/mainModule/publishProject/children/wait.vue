<template>
    <div class="main">
        <div class="wait">
            <el-alert
                :closable="false"
                show-icon
                title="申请成功"
                type="success"
                description="您的众筹项目申请成功，我们将在五个工作日内给予回复，您可在个人中心查看项目申请状态。">
            </el-alert>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.wait{
    @media screen and (max-width: 800px) {
        padding:0 10px;
    }
    .el-alert{
        padding-top: 20px;
        padding-bottom: 20px;
    }
    /deep/ .el-alert__title{
        font-size:18px;
    }
    /deep/ .el-alert__description{
        font-size:14px;
        margin-top: 10px;
    }
}
</style>
