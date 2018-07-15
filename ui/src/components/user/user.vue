<template>
    <div class="user">
        <el-row class="header">
            <el-col :span="2">
                <img :src="require('@/assets/head.jpeg')" >
            </el-col>
            <el-col :span="4" class="header-person">
                <h1>{{ $route.params.id }}</h1>
                <span>男 | | 网页设计</span>
                <div>
                    <span>粉丝 0</span>
                    <span>关注 0</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <nav>
                <ul>
                    <li class="active">发布的项目 0</li>
                    <li>关注的项目 0</li>
                    <li>动态 0</li>
                </ul>
            </nav>
            <el-row class="pubProject">
                <el-col :span="6">
                    <el-card class="box-card">
                        <img :src="require('@/assets/2.jpg')" alt="">
                        <div class="cover">
                            <div>
                                <h4>2018年首届抹茶大会</h4>
                                <el-button type="danger" round plain>关  注</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.user{
    margin-top: 60px;
    color:black;
}
.header{
    padding: 30px;
    /* background:url('/static/blue1.jpg');
    background-size: cover; */
    background: rgba(248, 247, 247, 0.767);
}
.header img{
    width: 100%;
    border-radius: 5px;
}
.header-person{
    margin-left: 20px;
}
.header-person h1{
    font-size: 20px;
    font-weight: normal;
    margin: 0;
    padding: 0;
}
.header-person span{
    display: inline-block;
    font-size: 15px;
    margin-top: 15px;
}
.header-person>div span{
    margin-right: 20px;
}
nav{
    width: 100%;
    border-top: 1px solid rgb(233, 232, 232);
    border-bottom: 1px solid rgb(233, 232, 232);
}
nav ul {
    display: flex;
    list-style: none;
    margin: 0;
}

nav ul li {
    position: relative;
    padding: 20px 10px;
    margin-right: 30px;
    font-size: 18px;
    color: #000;
    line-height: 1;
    transition: 0.2s all linear;
    cursor: pointer;
    color: rgb(63, 62, 62);
}
nav ul li.active{
    color: rgb(66, 126, 182);
    border-bottom: 2px solid rgb(20, 80, 119);
}
nav ul li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid rgb(20, 80, 119);
    transition: 0.2s all linear;
}

nav ul li:hover::before {
    width: 100%;
    top: 0;
    left: 0;
    transition-delay: 0.1s;
    border-bottom: 2px solid rgb(20, 80, 119);
    z-index: -1;
}

nav ul li:hover ~ li::before {
    left: 0;
}

nav ul li:active {
    color: rgb(66, 126, 182);
}
.pubProject>.el-col{
    padding: 20px;
}
.pubProject>.el-col .el-card{
    position: relative;
}
.pubProject>.el-col img{
    width: 100%;
}
.pubProject>.el-col .cover{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    opacity: 0;
    cursor: pointer;
}
.pubProject>.el-col .cover:hover{
    background: rgba(0, 0, 0, 0.445);
    opacity: 1;
}
.pubProject>.el-col .cover>div{
    width: 70%;
    color: #fff;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.pubProject>.el-col .cover h4{
    margin-bottom: 20px;
    font-size: 1.2em;
}
</style>
