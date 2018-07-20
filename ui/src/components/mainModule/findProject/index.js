//引入基本模板
import item from '../../children/item'
import $ from '@/api/axios.init'
let echarts = require('echarts/lib/echarts')
    //引入柱状图组件
require('echarts/lib/chart/bar')
require("echarts/lib/chart/lines")
require('echarts/lib/chart/pie')
require("echarts/lib/component/toolbox")
require('echarts/lib/component/title')
export default {
    name: 'findProject',
    data() {
        return {
            carouselImgUrl: [
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg')
            ],
            moneyTop: [{
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 1,
                progress: 40,
                followerNum: 1773,
                commentNum: 157,
                active: true
            }, {
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 2,
                progress: 40,
                followerNum: 1773,
                commentNum: 157,
                active: false
            }, {
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 3,
                progress: 40,
                followerNum: 1773,
                commentNum: 157,
                active: false
            }, {
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 4,
                progress: 40,
                followerNum: 1773,
                commentNum: 157,
                active: false
            }, {
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 5,
                progress: 40,
                followerNum: 1773,
                commentNum: 157,
                active: false
            }],
            ideaTop:[{
                title:'变形金刚·时代',
                supportNum:300,
                img:require('../../../assets/2.jpg')
            },{
                title:'变形金刚·时代',
                supportNum:300,
                img:require('../../../assets/2.jpg')
            },{
                title:'变形金刚·时代',
                supportNum:300,
                img:require('../../../assets/2.jpg')
            },{
                title:'变形金刚·时代',
                supportNum:300,
                img:require('../../../assets/2.jpg')
            }],
            projectsNum: 100,
            pageSize: 12,
            projects:[{
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 1,
                progress: 40,
                followerNum: 1773,
                commentNum: 157
            },{
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 1,
                progress: 40,
                followerNum: 1773,
                commentNum: 157
            },{
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 1,
                progress: 40,
                followerNum: 1773,
                commentNum: 157
            }],
            category: ['游戏','动漫','出版','影视','音乐','活动','设计','科技','食品','其他','爱心通道','个人愿望','粉丝应援'],
            categoryActive: '游戏',
            status: ['全部状态','创意','众筹中','众筹成功'],
            statusActive: '全部状态',
            order: ['最新上线','金额最高','评论最多'],
            orderActive: '最新上线',
            activeName: '1',
            chartDate: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9', '1-10', '1-11'],
            chartMoney: [12, 21, 10, 4, 12, 5, 6, 5, 25, 23, 70],
            categoryPercent: [
                { value: 335, name: '游戏' },
                { value: 310, name: '动漫' },
                { value: 234, name: '影视' },
                { value: 135, name: '音乐' },
                { value: 1548, name: '其他' }
            ],
            myChart: {},
            myChartPie: {},
        };
    },
    beforeCreate () {
        $.get('/findProject').then(res => {
            this.carouselImgUrl = res.data.carouselImgUrl
            this.moneyTop = res.data.moneyTop
            this.projects = res.data.projects
            this.projectsNum = res.data.projectsNum
            this.chartDate = res.data.chartDate
            this.chartMoney = res.data.chartMoney
            this.categoryPercent = res.data.categoryPercent
          }).catch(err => {
              console.log(err)
              this.$message({
                  message:'网络异常，请刷新重试',
                  type: 'error'
              })
          })
    },
    mounted() {
        let echarts = this.drawChart()
        this.myChart = echarts.myChart
        this.myChartPie = echarts.myChartPie
        window.onresize = () => {
            this.myChart.resize()
            this.myChartPie.resize()
        }
    },
    methods: {
        drawChart() {
            let myChart = echarts.init(document.getElementById('myChart'))
            let myChartPie = echarts.init(document.getElementById('myChartPie'))
            myChart.setOption({
                title: {
                    x: 'center',
                    text: '2018-众筹总资金趋势一览图'
                },
                tooltip: {
                    trigger: 'item'
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                grid: {
                    borderWidth: 0,
                    y: 80,
                    y2: 60
                },
                xAxis: [{
                    type: 'category',
                    show: true,
                    data: this.chartDate
                }],
                yAxis: [{
                    name: '万元', 
                    type: 'value',
                    show: true
                }],
                series: [{
                    name: '众筹总资金趋势一览图',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                    '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                    '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                    '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                ];
                                return colorList[params.dataIndex]
                            },
                            label: {
                                show: true,
                                position: 'bottom',
                                formatter: '{b}'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            }
                        }
                    },
                    data: this.chartMoney,
                    
                }]
            })
            myChartPie.setOption({
                title: {
                    text: '各类项目数量占比统计',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left'
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                series: [{
                    name: '各类占比',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: this.categoryPercent
                }]
            })
            return { myChart: myChart, myChartPie: myChartPie }
        },
        moneyTopChange(i){
            console.log('over')
            this.moneyTop.map(function(item){
                console.log(item)
                item.active = false
            })
            this.moneyTop[i].active = true
        },
        sendCategory(command){
            this.categoryActive = command
            $.post('/newCategory',{
                command:command
            }).then(res => {
                this.projects = res.data.projects
            }).catch(err => {
                this.$message({
                    message: '网络异常,请重试',
                    type: 'error'
                })
            })
        },
        sendStatus(command){
            this.statusActive = command
            $.post('/newStatus',{
                command:command
            }).then(res => {
                this.projects = res.data.projects
            }).catch(err => {
                this.$message({
                    message: '网络异常,请重试',
                    type: 'error'
                })
            })
        },
        sendOrder(command){
            this.orderActive = command
            $.post('/newOrder',{
                command:command
            }).then(res => {
                this.projects = res.data.projects
            }).catch(err => {
                this.$message({
                    message: '网络异常,请重试',
                    type: 'error'
                })
            })
        },
        currentChange(curIndex){
            $.post('/getCurPage',{
                curPage:curIndex
            }).then(res => {
                this.projects = res.data.projects
            })
        }
    },
    components: {
        item
    }
}