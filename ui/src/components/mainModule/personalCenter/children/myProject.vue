<template>
    <div class="myProject">
        <div class="mine">
            <h2>我发布的项目</h2>
            <div class="all">
                <el-col :span="8">
                    <div class="one">
                        <img :src="require('@/assets/2.jpg')" alt="">
                    </div>
                </el-col>
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
        .mine{
            .one{
                padding: 10px;
                img{
                    width:100%;
                }
            }
        }
    }
</style>