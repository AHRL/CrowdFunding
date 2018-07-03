<template>
  <div class="findMain">
      <div class="carousel">
          <el-carousel :interval="5000" trigger="click" type="card" height="300px">
            <el-carousel-item v-for="(item,i) in carouselImgUrl" :key="i">
            <router-link to=""><img :src="item" alt=""></router-link>
            </el-carousel-item>
          </el-carousel>
      </div>
      <div class="container">
          <el-row class="hidden-sm-and-down top">
              <el-col :span="24">
                  <el-col :span="16">
                    <h2>24小时金额榜</h2>
                    <div class="moneyTop">
                        <el-col :span="2">
                            <ul class="moneyTopOrder">
                                <li v-for="(item,i) in moneyTop" :key="i">{{ i+1 }}</li>
                            </ul>
                        </el-col>
                        <el-col :span="22">
                            <div>
                                <div v-for="(item,i) in moneyTop" :key="i">
                                    <el-col class="moneyTopImg" :md="14" :lg="12">
                                        <img :src="item.imgUrl" alt="">
                                    </el-col>
                                    <el-col :md="9" :lg="10" :offset="1" class="moneyTopContent">
                                        <div>
                                            <h3>{{ item.header }}</h3>
                                            <p class="author">
                                                <img :src="item.authorHeadUrl" alt="">
                                                <span>{{ item.authorName }}</span>
                                            </p>
                                            <p class="moneyTopDescription">{{ item.description }}</p>
                                            <div>
                                                <div class="moneyData">
                                                    <span class="money">￥{{ item.money }}</span>
                                                    <span>{{ item.progress }}%</span>
                                                </div>
                                                <el-progress :percentage="item.progress" :show-text=false></el-progress>
                                            </div>
                                            <p class="moneyTopFol">{{ item.followerNum }} 支持者 · {{ item.commentNum }} 条评论</p>
                                        </div>
                                    </el-col>
                                </div>
                            </div>
                        </el-col>
                    </div>
              </el-col>
              <el-col class="ideaTop" :md="7" :lg="7">
                  <h2>24小时创意榜</h2>
                  <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="1. 变形金刚·时代" name="1">
                        <div class="ideaItem">
                            <div>
                                <img :src="require('../../../assets/heart.png')" alt="">
                                <span>200人看好创意</span>
                            </div>
                            <img :src="require('../../../assets/2.jpg')" alt="">
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="2. 变形金刚·时代" name="2">
                        <div class="ideaItem">
                            <div>
                                <img :src="require('../../../assets/heart.png')" alt="">
                                <span>200人看好创意</span>
                            </div>
                            <img :src="require('../../../assets/2.jpg')" alt="">
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="3. 变形金刚·时代" name="3">
                       <div class="ideaItem">
                            <div>
                                <img :src="require('../../../assets/heart.png')" alt="">
                                <span>200人看好创意</span>
                            </div>
                            <img :src="require('../../../assets/2.jpg')" alt="">
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="4. 变形金刚·时代" name="4">
                        <div class="ideaItem">
                            <div>
                                <img :src="require('../../../assets/heart.png')" alt="">
                                <span>200人看好创意</span>
                            </div>
                            <img :src="require('../../../assets/2.jpg')" alt="">
                        </div>
                    </el-collapse-item>
                  </el-collapse>
              </el-col>
              </el-col>
          </el-row>
          <div class="onlineProject">
                <el-row>
                    <el-col :span="24">
                        <el-row class="classify">
                            <el-col :sm="8" :span="5">
                                <h2>在线项目</h2>
                            </el-col>
                            <el-col :sm="8" :span="7" :offset="2">
                                <span>共100个项目</span>
                            </el-col>
                            <el-col class="menus" :sm="19" :span="14" :offset="5">
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        类别<i class="el-icon-caret-bottom el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>黄金糕</el-dropdown-item>
                                        <el-dropdown-item>狮子头</el-dropdown-item>
                                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                        <el-dropdown-item>双皮奶</el-dropdown-item>
                                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        状态<i class="el-icon-caret-bottom el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>黄金糕</el-dropdown-item>
                                        <el-dropdown-item>狮子头</el-dropdown-item>
                                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                        <el-dropdown-item>双皮奶</el-dropdown-item>
                                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        菜单<i class="el-icon-caret-bottom el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>黄金糕</el-dropdown-item>
                                        <el-dropdown-item>狮子头</el-dropdown-item>
                                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                        <el-dropdown-item>双皮奶</el-dropdown-item>
                                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </el-col>
                        </el-row>
                        <el-row class="items">
                            <el-col v-for="(item,i) in moneyTop" :key="i" :span="6">
                                <el-card shadow="hover">
                                    <div>
                                        <img class="itemImg" :src="require('../../../assets/2.jpg')" />
                                    </div>
                                    <div class="itemContent">
                                        <h3>{{ item.header }}</h3>
                                        <p class="author">
                                            <img :src="item.authorHeadUrl" alt="">
                                            <span>{{ item.authorName }}</span>
                                        </p>
                                        <div>
                                            <div class="moneyData">
                                                <span class="money">￥{{ item.money }}</span>
                                                <span>{{ item.progress }}%</span>
                                            </div>
                                            <el-progress :percentage="item.progress" :show-text=false></el-progress>
                                        </div>
                                        <p class="moneyTopFol">{{ item.followerNum }} 支持者</p>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                        <el-row class="pages">
                            <el-pagination background layout="total,prev, pager, next,jumper" :page-size="12" :total="100"></el-pagination>
                        </el-row>
                    </el-col>
                </el-row>
          </div>
          <div class="projectCharts">
                <h2>项目实况统计</h2>
                <el-row>
                    <el-col :span="15" :offset="1">
                        <div id="myChart" :style="{width:'100%',height:'400px'}"></div>
                    </el-col>
                    <el-col :span="8">
                        <div id="myChartPie" :style="{width:'100%',height:'400px'}"></div>
                    </el-col>
                </el-row>
          </div>
      </div>
  </div>
</template>
<script>
import findProject from './index.js'
export default findProject

</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
