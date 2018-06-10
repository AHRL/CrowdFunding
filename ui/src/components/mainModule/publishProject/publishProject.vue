<template>
    <div class="main">
        <el-steps :active="1" simple>
            <el-step title="步骤 1" icon="el-icon-edit"></el-step>
            <el-step title="步骤 2" icon="el-icon-upload"></el-step>
            <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>
    </div>
</template>
<script>
import publishProject from './index.js'
export default publishProject
</script>
<style lang="scss" scoped>
    @import './index.scss' 
</style>
