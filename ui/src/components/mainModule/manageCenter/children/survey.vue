<template>
    <div class="survey">
        <el-row class="allProgress">
            <el-col :span="10">
                <h5 class="yearIncrease"><i class="el-icon-caret-top"></i>年增长率</h5>
                <el-col class="circleProgress" :span="12">
                    <div>
                        <el-progress :show-text="false" :stroke-width="15" type="circle" :percentage="80" color="#409EFF"></el-progress>
                        <div class="increaseMsg">
                            <p>60%</p>
                            <span>总资金</span>
                        </div>
                    </div>
                </el-col>
                <el-col class="circleProgress" :span="12">
                    <div>
                        <el-progress :stroke-width="15" :show-text="false" type="circle" :percentage="80" color="#8e71c7"></el-progress>
                        <div class="increaseMsg">
                            <p>60%</p>
                            <span>注册量</span>
                        </div>
                    </div>
                </el-col>
            </el-col>
            <el-col class="progress" :span="14">
                <div>
                    <el-row>
                        <el-col :span="6">
                            <span>资金日增长</span>
                        </el-col>
                        <el-col :span="18">
                            <el-progress :percentage="40"></el-progress>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <span>资金月增长</span>
                        </el-col>
                        <el-col :span="18">
                            <el-progress :percentage="100" color="#8e71c7"></el-progress>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <span>用户日增长</span>
                        </el-col>
                        <el-col :span="18">
                            <el-progress :percentage="60" color="#dc5771"></el-progress>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <span>用户月增长</span>
                        </el-col>
                        <el-col :span="18">
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
.survey{
    color: #000;
}
.allProgress{
    background: #fff;
    margin: 10px;
    box-shadow: 5px 5px 5px rgb(236, 235, 235);
}
.allProgress .el-col{
    padding: 10px;
}
.yearIncrease{
    margin:0; 
}
.circleProgress div{
    text-align: center;
    position: relative;
}
.circleProgress .increaseMsg{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    font-size: 14px;
}
.circleProgress .increaseMsg p{
    font-weight: 600;
    margin:5px 0;
}
.progress>div{
    border-left: 1px solid rgb(245, 242, 242);
    font-size: 14px;
    padding-left: 20px;
}
</style>