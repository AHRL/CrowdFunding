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
          <el-row class="top">
              <el-col :span="14" :offset="2">
                    <h2>24小时金额榜</h2>
                    <div class="moneyTop">
                        <el-col :span="2">
                            <ul class="moneyTopOrder">
                                <li v-for="(item,i) in moneyTop" :key="i">{{ i+1 }}</li>
                            </ul>
                        </el-col>
                        <el-col :span="21">
                            <div>
                                <div v-for="(item,i) in moneyTop" :key="i">
                                    <el-col class="moneyTopImg" :md="14" :lg="12">
                                        <img :src="item.imgUrl" alt="">
                                    </el-col>
                                    <el-col :md="9" :lg="11" :offset="1" class="moneyTopContent">
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
              <el-col class="ideaTop" :md="7" :lg="6">
                  <h2>24小时创意榜</h2>
                  <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="1. 变形金刚·时代" name="1">
                        <div class="ideaItem">
                            <div>
                                <img :src="require('../../assets/heart.png')" alt="">
                                <span>200人看好创意</span>
                            </div>
                            <img :src="require('../../assets/2.jpg')" alt="">
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="2. 变形金刚·时代" name="2">
                        <div class="ideaItem">
                            <div>
                                <img :src="require('../../assets/heart.png')" alt="">
                                <span>200人看好创意</span>
                            </div>
                            <img :src="require('../../assets/2.jpg')" alt="">
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="3. 变形金刚·时代" name="3">
                       <div class="ideaItem">
                            <div>
                                <img :src="require('../../assets/heart.png')" alt="">
                                <span>200人看好创意</span>
                            </div>
                            <img :src="require('../../assets/2.jpg')" alt="">
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="4. 变形金刚·时代" name="4">
                        <div class="ideaItem">
                            <div>
                                <img :src="require('../../assets/heart.png')" alt="">
                                <span>200人看好创意</span>
                            </div>
                            <img :src="require('../../assets/2.jpg')" alt="">
                        </div>
                    </el-collapse-item>
                  </el-collapse>
              </el-col>
          </el-row>
          <div class="onlineProject">
                <el-row>
                    <el-col :span="20" :offset="2">
                        <el-row class="classify">
                            <el-col :span="5">
                                <h2>在线项目</h2>
                            </el-col>
                            <el-col :span="5" :offset="1">
                                <span>共100个项目</span>
                            </el-col>
                            <el-col class="menus" :span="14" :offset="9">
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
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
                                        下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
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
                                        下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
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
                                        <img class="itemImg" :src="require('../../assets/2.jpg')" />
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
                            <el-col :span="13" :offset="6">
                                <el-pagination background layout="total,prev, pager, next,jumper" :page-size="12" :total="100"></el-pagination>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
          </div>
          <div class="projectCharts">
              <el-row>
                  <el-col :span="20" :offset="2">
                      <el-row>
                          <el-col>
                              <h2>项目实况统计</h2>
                          </el-col>
                      </el-row>
                      <el-row>
                          <el-col :span="14">
                              <div id="myChart" :style="{width:'600px',height:'400px'}"></div>
                          </el-col>
                          <el-col :span="8">
                              <div id="myChartPie" :style="{width:'400px',height:'400px'}"></div>
                          </el-col>
                      </el-row>
                  </el-col>
              </el-row>
          </div>
      </div>
  </div>
</template>
<script>
//引入基本模板
let echarts = require('echarts/lib/echarts')
//引入柱状图组件
require('echarts/lib/chart/bar')
require("echarts/lib/chart/lines")
require('echarts/lib/chart/pie')
require("echarts/lib/component/toolbox")
require('echarts/lib/component/title')
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
            ],
            moneyTop:[
                {
                    imgUrl:require('../../assets/2.jpg'),
                    header:'支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                    authorHeadUrl:require('../../assets/head.jpeg'),
                    authorName:'tianyu',
                    description:'漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                    money:220657.46,
                    progress:40,
                    followerNum:1773,
                    commentNum:157
                },{
                    imgUrl:require('../../assets/2.jpg'),
                    header:'支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                    authorHeadUrl:require('../../assets/head.jpeg'),
                    authorName:'tianyu',
                    description:'漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                    money:220657.46,
                    progress:40,
                    followerNum:1773,
                    commentNum:157
                },{
                    imgUrl:require('../../assets/2.jpg'),
                    header:'支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                    authorHeadUrl:require('../../assets/head.jpeg'),
                    authorName:'tianyu',
                    description:'漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                    money:220657.46,
                    progress:40,
                    followerNum:1773,
                    commentNum:157
                },{
                    imgUrl:require('../../assets/2.jpg'),
                    header:'支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                    authorHeadUrl:require('../../assets/head.jpeg'),
                    authorName:'tianyu',
                    description:'漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                    money:220657.46,
                    progress:40,
                    followerNum:1773,
                    commentNum:157
                },{
                    imgUrl:require('../../assets/2.jpg'),
                    header:'支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                    authorHeadUrl:require('../../assets/head.jpeg'),
                    authorName:'tianyu',
                    description:'漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                    money:220657.46,
                    progress:40,
                    followerNum:1773,
                    commentNum:157
                }
            ],
            activeName:'1'
      };
    },
    mounted () {
        this.drawChart()
    },
    methods: {
        drawChart(){
            let idx = 1
            let myChart = echarts.init(document.getElementById('myChart'))
            let myChartPie = echarts.init(document.getElementById('myChartPie'))
            myChart.setOption( {
                title: {
                    x: 'center',
                    text: 'ECharts例子个数统计',
                    subtext: 'Rainbow bar example',
                    link: 'http://echarts.baidu.com/doc/example.html'
                },
                tooltip: {
                    trigger: 'item'
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                grid: {
                    borderWidth: 0,
                    y: 80,
                    y2: 60
                },
                xAxis: [
                    {
                        type: 'category',
                        show: false,
                        data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show: false
                    }
                ],
                series: [
                    {
                        name: 'ECharts例子个数统计',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [
                                    '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                    '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                    '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                                    ];
                                    return colorList[params.dataIndex]
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{b}\n{c}'
                                }
                            }
                        },
                        data: [12,21,10,4,12,5,6,5,25,23,7],
                        markPoint: {
                            tooltip: {
                                trigger: 'item',
                                backgroundColor: 'rgba(0,0,0,0)',
                                formatter: function(params){
                                    return '<img src="' 
                                            + params.data.symbol.replace('image://', '')
                                            + '"/>';
                                }
                            },
                            data: [
                                {xAxis:0, y: 350, name:'Line', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
                                {xAxis:1, y: 350, name:'Bar', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
                                {xAxis:2, y: 350, name:'Scatter', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},
                                {xAxis:3, y: 350, name:'K', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},
                                {xAxis:4, y: 350, name:'Pie', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},
                                {xAxis:5, y: 350, name:'Radar', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},
                                {xAxis:6, y: 350, name:'Chord', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},
                                {xAxis:7, y: 350, name:'Force', symbolSize:20, symbol: 'image://../asset/ico/力导向图.png'},
                                {xAxis:8, y: 350, name:'Map', symbolSize:20, symbol: 'image://../asset/ico/地图.png'},
                                {xAxis:9, y: 350, name:'Gauge', symbolSize:20, symbol: 'image://../asset/ico/仪表盘.png'},
                                {xAxis:10, y: 350, name:'Funnel', symbolSize:20, symbol: 'image://../asset/ico/漏斗图.png'},
                            ]
                        }
                    }
                ]
            })
            myChartPie.setOption( {
                title : {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true, 
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            })
        }
    }
}
</script>
<style scoped>
img{
    margin: 0;
    padding:0;
}
h2{
    color:black;
}
h3{
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 600;
    color:black;
}
.carousel{
    margin-top:60px;
}
.el-carousel__item img{
    width: 100%;
}
/*container*/
.container{
    /* width: 80%; */
    margin:100px auto;
    margin-bottom: 50px;
}
/*24小时金额榜*/
.moneyTop{
    height: 250px;
    overflow: hidden;
}
.moneyTopOrder{
    /* height: 250px; */
    margin:0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* -webkit-box-flex: 1; */
    justify-content: space-between;
    border-left: 1px solid rgb(240, 240, 240);
    /* margin-right: 10px; */
}
.moneyTopOrder li{
    font-size: 18px;
    font-weight: bolder;
    list-style: none;
    padding:5px 22px;
    margin:9px 0;
}
.moneyTopOrder li:hover{
    box-shadow: -5px 0px 0px black;
    color:#000;
}
.moneyTopContent{
    font-size: 14px;
}
.moneyTopImg{
    line-height: 1;
}
.moneyTopImg img{
    width:100%;
}
.moneyData{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.moneyData .money{
    font-weight: 700;
    font-size: 20px;
    color:rgb(80, 145, 175);
}
.author{
    display: flex;
    align-items: center;
    flex-direction: row;
}
.author img{
    width: 20px;
    border-radius: 50%;
    margin-right: 5px;
}
.moneyTopDescription{
    height: 76px;
    overflow: hidden;
}
.moneyTopContent .el-progress{
    margin:6px 0;
}
.moneyTopFol{
    margin-top:10px;
}
/*24小时创意榜*/
.ideaItem,.ideaItem>div{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.ideaItem>div>img{
    margin-right: 5px;
}
.ideaItem{
    justify-content: space-around;
}
.ideaItem>img{
    width: 80px;
}
/* 在线项目 */
.onlineProject{
    margin-top:100px;
    padding: 50px 0;
    background: rgb(249, 250, 250);
}
.classify{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.menus .el-dropdown{
    margin-right: 30px;
    font-size: 16px;
}
.items{
    border-top: 1px solid rgb(240, 239, 239);
    padding-top: 20px;
}
.itemImg{
    width: 100%;
}
.itemContent{
    padding:10px;
    color: rgb(151, 151, 151);
}
.itemContent .money{
    font-size: 16px;
}
.itemContent .author,.itemContent .moneyTopFol{
    font-size: 14px;
}
.items>.el-col{
    padding: 10px;
}
.pages{
    margin-top: 30px;
}
.projectCharts{
    margin-top: 50px;
}
</style>
