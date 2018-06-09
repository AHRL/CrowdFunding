<template>
    <el-row class="one">
        <el-row>
            <el-col class="authorBox">
                <img :src="require('../../../assets/head.jpeg')" alt="">
                <div>
                    <span>小周动漫</span>
                    <span>今天07:50 · 发布长文</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <p>
                今天天气很好...
            </p>
            <div v-if="img.length>0" class="photoWall">
                <el-row v-if="img.length == 1">
                    <el-col :span="24">
                        <img :src="img[0]" />
                    </el-col>
                </el-row>
                <el-row v-else-if="img.length > 1&&img.length<=4">
                    <el-col :span="12" v-for="(item,i) in img" :key="i">
                        <img :src="item" alt="">
                    </el-col>
                </el-row>
                <el-row v-else-if="img.length > 4 && img.length <= 9">
                    <el-col :span="8" v-for="(item,i) in img" :key="i">
                        <img :src="item" alt="">
                    </el-col>
                </el-row>
                <el-row v-else-if="img.length > 9">
                    <el-col :span="8" v-for="(item,i) in img" :key="i" v-if="i < 8">
                        <img :src="item" alt="">
                    </el-col>
                </el-row>
            </div>
        </el-row>
    </el-row>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>

