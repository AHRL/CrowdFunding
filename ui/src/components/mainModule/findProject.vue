<template>
  <div class="findMain">
      <div class="carousel">
          <el-carousel :interval="5000" trigger="click" type="card" height="300px">
            <el-carousel-item v-for="(item,i) in carouselImgUrl" :key="i">
            <img :src="item" alt="">
            </el-carousel-item>
          </el-carousel>
      </div>
      <div class="container">
          <el-row>
            <el-col :span="15">
                <el-col :span="2">
                    <ul>
                        <li></li>
                    </ul>
                </el-col>
            </el-col>
            <el-col :span="6">
                
            </el-col>
          </el-row>
      </div>
  </div>
</template>
<script>
import moneyTop from './findChildren/moneyTop'
export default {
    data () {
        return {
            carouselImgUrl:[
                require('../../assets/2.jpg'),
                require('../../assets/2.jpg'),
                require('../../assets/2.jpg'),
                require('../../assets/2.jpg'),
                require('../../assets/2.jpg'),
                require('../../assets/2.jpg')
            ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }

    },
    components:{
        moneyTop
    }
}
</script>
<style scoped>
.carousel{
    margin-top:60px;
}
.el-carousel__item img{
    width: 100%;
}
.container{
    width: 80%;
    margin:0 auto;
}
.el-menu{
    border-left: 1px solid #e6e6e6;
}
</style>
