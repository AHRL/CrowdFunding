<template>
    <div class="survey">
        <el-row>
            <el-col class="item" :span="6">
                <div>
                    <el-progress :show-text="false" stroke-width="15" type="circle" :percentage="80" color="#8e71c7"></el-progress>
                </div>
            </el-col>
            <el-col class="item" :span="6">
                <div>
                    <el-progress :show-text="false" stroke-width="15" type="circle" :percentage="80" color="#8e71c7"></el-progress>
                </div>
            </el-col>
            <el-col class="item" :span="6">
                <div>
                    <el-progress :show-text="false" stroke-width="15" type="circle" :percentage="80" color="#8e71c7"></el-progress>
                </div>
            </el-col>
            <el-col class="item" :span="6">
                <div>
                    <el-progress :show-text="false" stroke-width="15" type="circle" :percentage="80" color="#8e71c7"></el-progress>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16"></el-col>
            <el-col :span="8"></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.item{
    padding: 10px;
}
.item div{
    text-align: center;
    background: #fff;
}
</style>