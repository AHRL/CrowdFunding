$(function() {
    //搜索

    //24金额榜
    $.get('', function(data) {
            for (var i = 0; i < data.length; i++) {
                var topItem = $('<div class="topItem hidden">\
                <img class="col-sm-6" src="' + data[i].imgUrl + '" alt="">\
                <div class="topText col-sm-6">\
                    <h5>' + data[i].title + '</h5>\
                    <p><img class="headImg" src="img/head.jpg" />' + data[i].publisher + '</p>\
                    <p class="textBox">' + data[i].content + '</p>\
                    <div class="topProgress">\
                        <div class="clearfix">\
                            <span class="money pull-left text-primary">' + data[i].money + '</span>\
                            <span class="overMoney pull-right">' + data[i].percentage + '</span>\
                        </div>\
                        <div class="progress">\
                            <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: ' + data[i].percentage + '%">\
                                <span class="sr-only">' + data[i].percentage + '% Complete (success)</span>\
                            </div>\
                        </div>\
                        <span class="sum">' + data[i].follower + '支持者·' + data[i].comment + '评论</span>\
                    </div>\
                </div>\
            </div>');
                $(".topItems").append(topItem);
            }
            $('.topItem:eq(0)').removeClass("hidden");
            $('#moneyTop>.order>li').each(function(index, element) {
                $(this).hover(function() {
                    for (var i = 0; i < $(".topItem").length; i++) {
                        if (i === index + 1) {
                            $(".topItem").eq(i).removeClass("hidden");
                        } else {
                            $(".topItem").eq(i).addClass("hidden");
                        }
                    }
                })
            })
        })
        //近日资金流动
    $.get('', function(data) {
            var myChart = echarts.init(document.getElementById('moneyEchart'));
            var inMoney = [],
                outMoney = [],
                date = [];
            for (i in data) {
                date.push(data[i].date);
                inMoney.push(data[i].inMoney);
                outMoney.push(data[i].outMoney);
            }
            myChart.setOption({
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    feature: {
                        dataView: {
                            show: false,
                            readOnly: false
                        },
                        magicType: {
                            show: false,
                            type: ['line', 'bar']
                        },
                        restore: {
                            show: false
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                legend: {
                    data: ['流入', '流出']
                },
                xAxis: [{
                    type: 'category',
                    data: date
                }],
                yAxis: [{
                    type: 'value',
                    name: '流入资金',
                    min: 0,
                    max: 1000,
                    axisLabel: {
                        formatter: '{value} 万'
                    }
                }, {
                    type: 'value',
                    name: '流出资金',
                    min: 0,
                    max: 1000,
                    axisLabel: {
                        formatter: '{value} 万'
                    }
                }],
                series: [{
                    name: '流入',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = [
                                    '#5e7e54', '#e44f2f', '#81b6b2', '#eba422', '#5e7e54',
                                    '#e44f2f', '#81b6b2', '#eba422', '#5e7e54', '#e44f2f'
                                ];
                                return colorList[params.dataIndex]
                            },
                            　　　　　　　　　　　　　
                        }
                    },
                    data: inMoney
                }, {
                    name: '流出',
                    type: 'line',
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            color: '#58585a',
                            lineStyle: {
                                color: '#58585a'
                            }
                        }
                    },
                    data: outMoney
                }]
            })
        })
        //在线项目
    $.get('', function(data) {
            for (var i = 0; i < data.length; i++) {
                var item = $('<div class="item">\
            <img class="itemImg" src="' + data[i].imgUrl + '" alt="">\
            <h5>' + data[i].title + '</h5>\
            <p><img class="headImg" src="img/head.jpg" />' + data[i].publisher + '</p>\
            <div class="topProgress">\
                <div class="clearfix">\
                    <span class="money pull-left text-primary">' + data[i].money + '</span>\
                    <span class="overMoney pull-right">' + data[i].percentage + '</span>\
                </div>\
                <div class="progress">\
                    <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="' + data[i].percentage + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + data[i].percentage + '%">\
                        <span class="sr-only">' + data[i].percentage + '% Complete (success)</span>\
                    </div>\
                </div>\
                <span class="sum">' + data[i].follower + '支持者·' + data[i].comment + '评论</span>\
            </div>\
        </div>')
                $('.item-display').append(item);
            }
        })
        //动态
    $.get('', function(data) {
            for (var i = 0; i < data.length; i++) {
                var one = $('<div class="one clearfix">\
                    <div class="SHeadBox">\
                        <a href=""><img src="' + data[i].imgUrl + '" alt=""></a>\
                        <div>\
                            <a href=""><span class="funName">' + data[i].name + '</span></a>\
                            <a href="#">\
                                <p>今天' + data[i].time + ' · 发布动态</p>\
                            </a>\
                        </div>\
                    </div>\
                    <div class="content' + i + '">\
                        <a href="">\
                            <p class="col-sm-12">' + data[i].content + '</p>\
                        </a>\
                    </div>\
                    <div class="bottomBar">\
                        <div class="icons col-sm-12">\
                            <a href=""><i class="fa fa-share"><span>分享</span></i></a>\
                            <a href=""><i class="fa fa-comments"><span>' + data[i].commentNum + '条评论</span></i></a>\
                            <a href=""><i class="fa fa-thumbs-up"><span>' + data[i].zanNum + '</span><span>赞</span></i></a>\
                        </div>\
                        <div class="comments col-sm-11">\
                            <div class="allCom' + i + '">\
                            </div>\
                            <a href="" class="col-sm-12 lookMore text-center">查看全部' + data[i].commentNum + '条评论 <i class="fa fa-play"></i></a>\
                            <div class="comInput">\
                                <div class="col-sm-12">\
                                    <img src="img/head.jpg" class="comHead pull-left" alt="">\
                                    <textarea name="" id="" class="col-sm-10 curComment" rows="3"></textarea>\
                                    <div class="addInput">\
                                        <div>\
                                            <i class="glyphicon glyphicon-picture"></i>\
                                            <div class="uploaderBox"></div>\
                                        </div>\
                                        <span class="send">评论</span>\
                                    </div>\
                                </div>\
                                <div class="addImage">\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>')
                $('.allSpeak').append(one);
                if (data[i].img.length != 0) {
                    for (var p = 0; p < data[i].img.length; p++) {
                        var img = $('<img class="col-sm-12" src="img/2.jpg" alt="">');
                        $('.content' + i).append(img);
                    }
                }
                if (data[i].comment.length != 0) {
                    for (var j = 0; j < data[i].comment.length; j++) {
                        var comment = $('<div class="media comment col-sm-12">\
                            <div class="media-left">\
                                <a href="#">\
                                    <img class="media-object" src="' + data[i].comment[j].imgUrl + '" alt="">\
                                </a>\
                            </div>\
                            <div class="media-body' + (i * 10 + j) + '">\
                                <div>\
                                    <a class="media-heading">' + data[i].comment[j].name + '</a>\
                                    <span>·</span>\
                                    <span>' + data[i].comment[j].time + '</span>\
                                    <span class="pull-right">\
                                                        <a href=""><i class="fa fa-comment"></i>\
                                                </a>\
                                                <a href=""><i class="fa fa-thumbs-up"><span>' + data[i].comment[j].zanNum + '</span></i>\
                                    </a>\
                                    </span>\
                                </div>\
                                <p>' + data[i].comment[j].comment + '</p>\
                            </div>\
                        </div>')
                        $('.allCom' + i).append(comment);
                        if (data[i].comment[j].com.length != 0) {
                            for (var k = 0; k < data[i].comment[j].com.length; k++) {
                                var com = $(' <div class="media comment">\
                                    <div class="media-left">\
                                        <a href="#">\
                                            <img class="media-object" src="' + data[i].comment[j].com[k].imgUrl + '" alt="">\
                                        </a>\
                                    </div>\
                                    <div class="media-body">\
                                        <div>\
                                            <a class="media-heading">' + data[i].comment[j].com[k].name + '</a>\
                                            <span>·</span>\
                                            <span>' + data[i].comment[j].com[k].time + '</span>\
                                            <span class="pull-right">\
                                                                <a href=""><i class="fa fa-comment"></i>\
                                                        </a>\
                                                        <a href=""><i class="fa fa-thumbs-up"><span>' + data[i].comment[j].com[k].zanNum + '</span></i>\
                                            </a>\
                                            </span>\
                                        </div>\
                                        <p>' + data[i].comment[j].com[k].comment + '/p>\
                                    </div>\
                                </div>')
                                $('.media-body' + (i * 10 + j)).append(com);
                            }
                        }
                    }
                }
            }
        })
        //热门话题
    $.get('', function(data) {
        var topic = $('<a href=""><img class="col-sm-12 asider-img hot-image" src="' + data[0].imgUrl + '" alt=""></a>\
            <a href="#">\
                <h4><span class="symbol">#</span>' + data[0].title + '<span class="symbol">#</span></h4>\
            </a>\
            <span class="sum">' + data[0].tlNum + '人讨论·' + data[0].zanNum + '个赞·' + data[0].status + '</span>');
        $('.hot-topic').parent().append(topic);
    })
    $.get('', function(data) {
        var fun = $('<a href="' + data[0].url + '">\
        <img src="' + data[0].imgUrl + '" alt="">\
        <p class="funName">' + data[0].name + '</p>\
    </a>\
    <p class="sum">' + data[0].dtNum + '篇动态·' + data[0].follower + '人已关注</p>\
    <div class="px"></div>\
    <p class="intro">' + data[0].intro + '</p>\
    <button class="focus">' + data[0].isFocus + '</button>')
        $('.fun').append(fun);
        $('.focus').click(function() {
            var _this = $(this);
            $.post('', {
                data: _this.parent().find('.funName').html()
            }, function(data) {
                $('.focus').html(data);
            })
        })
    })
})

function currying(n) {
    return function(m) {
        console.log(m);
    }
}
var fn = currying(1);
fn(2)