<template>
  <div class="search">
    <h1><i class="el-icon-search"></i>搜索结果</h1>
    <div>
      <h3>相关项目</h3>
      <el-row class="items">
        <item v-for="(val,i) in projects" :key="i" :project="val"></item>
      </el-row>
    </div>
    <div>
      <h3>相关用户</h3>
      <el-row class="teamMem">
          <el-col :span="6" v-for="(item,i) in users" :key="i">
              <el-card shadow="hover">
                  <div class="headBox">
                      <div class="cover"></div>
                      <img :src="item.imgUrl">
                  </div>
                  <div class="message">
                      <span>昵称：{{ item.name }}</span>
                      <span>所在地：{{ item.address }}</span>
                      <span>个人说明：{{ item.intro }}</span>
                  </div>
              </el-card>
          </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import item from '../children/item'
export default {
    data () {
      return {
          projects:[{
            imgUrl: require('../../assets/2.jpg'),
            header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
            authorHeadUrl: require('../../assets/head.jpeg'),
            authorName: 'tianyu',
            description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
            money: 1,
            progress: 40,
            followerNum: 1773,
            commentNum: 157
        },{
            imgUrl: require('../../assets/2.jpg'),
            header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
            authorHeadUrl: require('../../assets/head.jpeg'),
            authorName: 'tianyu',
            description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
            money: 1,
            progress: 40,
            followerNum: 1773,
            commentNum: 157
        },{
            imgUrl: require('../../assets/2.jpg'),
            header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
            authorHeadUrl: require('../../assets/head.jpeg'),
            authorName: 'tianyu',
            description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
            money: 1,
            progress: 40,
            followerNum: 1773,
            commentNum: 157
        }],
        users:[{
          imgUrl:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
          name:'aa',
          address:'四川省-成都市',
          intro:'哈哈哈哈或'
        }]
      }
    },
    methods: {
      
    },
    mounted () {
      this.$axios.post('/')
    },
    components: {
      item
    }
}
</script>
<style lang="scss" scoped>
.search{
  width:80%;
  max-width:1200px;
  min-width: 960px;
  margin: 60px auto;
  .teamMem{
    >.el-col{
        padding:10px;
    }
    $width:60px;
    margin-top: 20px;
    .headBox{
        height: 100px;
        // rgb(228, 107, 92);
        // rgba(46, 135, 138, 0.308)
        position: relative;
        margin-bottom: $width/2+20;
        .cover{
            width: 100%;
            height: 100%;
            margin-bottom: $width/2+10;
            background: url(../../assets/blue.jpg) no-repeat -20% 20%;
            background-size: cover;
            -webkit-filter: blur(2px);
            -moz-filter:blur(2px);
            -ms-filter:blur(2px);
            -o-filter:blur(2px);
            filter:blur(2px);
        }
        img{
            width: $width;
            border-radius: 50%;
            position: absolute;
            bottom: -$width/2;
            left: 50%;
            transform: translate(-50%)
        }
    }
    .message{
        margin-left: 10px;
        margin-bottom: 10px;
        font-size: 14px;
        text-align: center;
        span{
            display:block;
            margin-top: 5px;
            &:last-child{
              margin-bottom: 20px;
            }
        }
    }
  }
}
</style>
