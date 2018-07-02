<template>
    <div class="survey">
        <el-row class="allProgress">
            <el-col class="circleProgress" :span="5">
                <div>
                    <el-progress :show-text="false" :stroke-width="15" type="circle" :percentage="80" color="#409EFF"></el-progress>
                </div>
            </el-col>
            <el-col class="circleProgress" :span="5">
                <div>
                    <el-progress :show-text="false" :stroke-width="15" type="circle" :percentage="80" color="#8e71c7"></el-progress>
                </div>
            </el-col>
            <el-col class="progress" :span="14">
                <div>
                    <el-row>
                        <el-col :span="4">
                            <span>月增长</span>
                        </el-col>
                        <el-col :span="20">
                            <el-progress :percentage="40"></el-progress>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            <span>月增长</span>
                        </el-col>
                        <el-col :span="20">
                            <el-progress :percentage="100" color="#8e71c7"></el-progress>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            <span>月增长</span>
                        </el-col>
                        <el-col :span="20">
                            <el-progress :percentage="60" color="#dc5771"></el-progress>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            <span>月增长</span>
                        </el-col>
                        <el-col :span="20">
                            <el-progress :percentage="10" color="#da9c63"></el-progress>
                        </el-col>
                    </el-row>
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
.allProgress{
    background: #fff;
    margin: 10px;
}
.allProgress .el-col{
    padding: 10px;
}
.circleProgress div{
    text-align: center;
}
.progress>div{
    border-left: 1px solid rgb(235, 233, 233);
    font-size: 14px;
    color: black;
    padding-left: 20px;
}
.progress .el-progress{
    
}
</style>