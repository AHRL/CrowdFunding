//引入基本模板
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
                money: 220657.46,
                progress: 40,
                followerNum: 1773,
                commentNum: 157
            }, {
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 220657.46,
                progress: 40,
                followerNum: 1773,
                commentNum: 157
            }, {
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 220657.46,
                progress: 40,
                followerNum: 1773,
                commentNum: 157
            }, {
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 220657.46,
                progress: 40,
                followerNum: 1773,
                commentNum: 157
            }, {
                imgUrl: require('../../../assets/2.jpg'),
                header: '支持神仙创业，非人哉「三好国漫计划」周边众筹启动！',
                authorHeadUrl: require('../../../assets/head.jpeg'),
                authorName: 'tianyu',
                description: '漫画好，动画好，周边也要好！新时代神仙好不好？全面发展很重要！ 《非人哉》漫画连载三年来微博阅读高达30亿，今年上线的《非人哉》动画播放量也已破亿！ 此次非人哉工作室新好周边',
                money: 220657.46,
                progress: 40,
                followerNum: 1773,
                commentNum: 157
            }],
            activeName: '1'
        };
    },
    mounted() {
        this.drawChart()
    },
    methods: {
        drawChart() {
            let idx = 1
            let myChart = echarts.init(document.getElementById('myChart'))
            let myChartPie = echarts.init(document.getElementById('myChartPie'))
            myChart.setOption({
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
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
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
                    show: false,
                    data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
                }],
                yAxis: [{
                    type: 'value',
                    show: false
                }],
                series: [{
                    name: 'ECharts例子个数统计',
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
                                position: 'top',
                                formatter: '{b}\n{c}'
                            }
                        }
                    },
                    data: [12, 21, 10, 4, 12, 5, 6, 5, 25, 23, 7],
                    markPoint: {
                        tooltip: {
                            trigger: 'item',
                            backgroundColor: 'rgba(0,0,0,0)',
                            formatter: function(params) {
                                return '<img src="' +
                                    params.data.symbol.replace('image://', '') +
                                    '"/>';
                            }
                        },
                        data: [
                            { xAxis: 0, y: 350, name: 'Line', symbolSize: 20, symbol: 'image://../asset/ico/折线图.png' },
                            { xAxis: 1, y: 350, name: 'Bar', symbolSize: 20, symbol: 'image://../asset/ico/柱状图.png' },
                            { xAxis: 2, y: 350, name: 'Scatter', symbolSize: 20, symbol: 'image://../asset/ico/散点图.png' },
                            { xAxis: 3, y: 350, name: 'K', symbolSize: 20, symbol: 'image://../asset/ico/K线图.png' },
                            { xAxis: 4, y: 350, name: 'Pie', symbolSize: 20, symbol: 'image://../asset/ico/饼状图.png' },
                            { xAxis: 5, y: 350, name: 'Radar', symbolSize: 20, symbol: 'image://../asset/ico/雷达图.png' },
                            { xAxis: 6, y: 350, name: 'Chord', symbolSize: 20, symbol: 'image://../asset/ico/和弦图.png' },
                            { xAxis: 7, y: 350, name: 'Force', symbolSize: 20, symbol: 'image://../asset/ico/力导向图.png' },
                            { xAxis: 8, y: 350, name: 'Map', symbolSize: 20, symbol: 'image://../asset/ico/地图.png' },
                            { xAxis: 9, y: 350, name: 'Gauge', symbolSize: 20, symbol: 'image://../asset/ico/仪表盘.png' },
                            { xAxis: 10, y: 350, name: 'Funnel', symbolSize: 20, symbol: 'image://../asset/ico/漏斗图.png' },
                        ]
                    }
                }]
            })
            myChartPie.setOption({
                title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        magicType: {
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
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                }]
            })
        }
    }
}