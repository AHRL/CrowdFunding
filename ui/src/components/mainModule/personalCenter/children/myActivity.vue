<template>
    <el-col class="myActivity" :span="24" data-content="动态管理">
        <publish></publish>
        <div class="activity">
            <h2>我的动态</h2>
            <div class="nothing" v-if="myActivity==''"><span>暂时还没有发布动态</span></div>
        </div>
        <div class="news">
            <h2>最新消息</h2>
            <div>
                
            </div>
        </div>
    </el-col>
</template>
<script>
import publish from '../../communityActivity/children/publish'
export default {
    data(){
        return {
            pubText:'',
            myActivity:''
        }
    },
    components: {
        publish
    }
}
</script>
<style lang="scss" scoped>
    .myActivity{
        color: rgb(151, 151, 151);
        h2 {
            color: black;
        }
        .activity{
            .nothing{
                height: 180px;
                position: relative;
                background: url('/static/word.png') no-repeat center center;
                >span{
                    text-align: center;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
    }
</style>