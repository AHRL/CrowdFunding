<template>
  <div class="activity">
    <!-- <el-row class="headMsg">
      <img :src="require('../../assets/head.jpeg')" alt="">
      <span>禁代布丁 · <span>发表于 2018-08-10 15:57:05</span></span>
    </el-row>
    <el-row></el-row> -->
    <activityItem :item="item" :page="activity"></activityItem>
  </div>
</template>
<script>
import activityItem from '../children/activityItem'
export default {
  data () {
    return {
      item:{
        id:12,
        userImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
        userName: '艾米',
        publishTime: '2018-07-21 19:20:24',
        publishType: '动态',
        publishContent: '地方撒范德萨发的说法是',
        zanActive:true,
        timer:null,
        img: [
            'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
            'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
            'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
            'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
            'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
            'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
            'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
            'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
            'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
            'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
        ],
        commentNum:3,
        supportNum:3,
        comments:[{
            timer:null,
            comId:0,
            comImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
            comName:'反攻倒算',
            comTime:'2018-07-21 19:20:24',
            comCont:'的范德萨发大幅度是',
            supportNum:5,
            zanActive:false,
            inputShow:false,
            replyText:'',
            reply:[
                {
                    repImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                    repName:'地方',
                    repTime:'2018-07-21 19:20:24',
                    repCont:'大法师打发是范德萨',
                    supportNum:5,
                }
            ],
        },{
            timer:null,
            comId:1,
            comImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
            comName:'反攻倒算',
            comTime:'2018-07-21 19:20:24',
            comCont:'的范德萨发大幅度是',
            supportNum:5,
            zanActive:false,
            inputShow:false,
            replyText:'',
            reply:[
                {
                    repImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                    repName:'地方',
                    repTime:'2018-07-21 19:20:24',
                    repCont:'大法师打发是范德萨',
                    supportNum:5,
                }
            ],
        }]
      }
    }
  },
  components: {
    activityItem
  }
}
</script>
<style scoped>
.activity{
  width: 760px;
  margin: 60px auto;
  color: black;
}
/* .headMsg{
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.headMsg img{
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.headMsg span>span{
  color: rgb(158, 155, 155);
} */
</style>

