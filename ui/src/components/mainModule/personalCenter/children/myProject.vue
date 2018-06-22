<template>
    <div class="myProject">
        <div class="mine">
            <h2>我发布的项目</h2>
            <div class="all">
                <div class="one">
                    <div class="imgs">
                        <img :src="require('@/assets/2.jpg')" alt="">
                    </div>
                    <div class="content">
                        <h4>摩擦大会</h4>
                        <p>的说法大三第三方士大夫的撒范德萨范德萨发水电费第三方的说法撒地方撒旦第三方士大夫的撒</p>
                        <!-- <div class="moneyBox">
                            <span>预期金额：<span class="money">34535</span></span>
                            <span>已筹金额：<span class="money">43534</span></span>
                        </div> -->
                        <!-- <el-progress :percentage="70" color="#ea606b"></el-progress> -->
                        <div class="tags">
                            <el-tag size="mini">2 · 评论</el-tag>
                            <el-tag size="mini">2 · 赞</el-tag>
                            <el-button type="primary" plain><i class="el-icon-more"></i></el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .myProject{
        color: black;
        @mixin blur-style($size) {
            -webkit-filter: blur($size);
            -moz-filter: blur($size);
            -ms-filter: blur($size);
            -o-filter: blur($size);
            filter: blur($size); 
        }
        .mine{
            .all{
                margin-top: 20px;
                h4{
                    margin: 0;
                    padding:0;
                }
                &>.one{
                    // position: relative;
                    &>div{
                        float: left;
                    }
                    .imgs{
                        margin-right: 20px;
                        img{
                            // width:100%;
                            height: 150px;
                        }
                    }
                    .content{
                        >p{
                            height:30px;
                        }
                        .tags{
                            // position: absolute;
                            // bottom: 0;
                            margin-top: 10px;
                            position: relative;
                            width: 100%;
                            /deep/ .el-tag{
                                margin-top: 15px;
                                color:#fff;
                                &:first-child{
                                    background: #909399;
                                }
                                &:nth-child(2){
                                    background: #E6A23C;
                                }
                            }
                            .el-button{
                                position:absolute;
                                right: 0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>