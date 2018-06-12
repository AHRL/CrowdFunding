<template>
    <div class="main">
        <div class="projectName">
            <h3>项目名称：众筹</h3>
        </div>
        <div class="captain">
            <div>
                <img :src="require('../../../../assets/head.jpeg')" alt="">
            </div>
            <div class="captainIntro">
                <h4>tianyu</h4>
                <span>职位：项目负责人</span>
                <span>个人介绍：欢迎fork me on github</span>
            </div>
        </div>
        <div class="addMember">
            <div class="addTopBar">
                <el-row>
                    <el-col>
                        <h3>添加团队成员</h3>
                    </el-col>
                    <el-input type="text" placeholder="按电话号码搜索"></el-input>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
$a-little-blue:rgb(214, 231, 245);
h4{
    margin:0;
    padding: 0;
}
.main{
    >div{
        margin-bottom: 30px;
    }
    h3,h4{
        color: #000;
    }
    .captain{
        height: 120px;
        border-radius: 60px 0 0 60px;
        background: -webkit-linear-gradient(left, $a-little-blue , white); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, $a-little-blue, white); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, $a-little-blue, white); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, $a-little-blue , white); /* 标准的语法 */
        >div{
            display: inline-block;
            vertical-align: middle;
            >span{
                display: block;
                margin-top: 5px;
            }
        }
        >div:first-child{
            height: 100%;
            margin-right: 20px;
        }
        img{
            height:100%;
            border-radius: 50%;
        }
    }
}
</style>
