//点击切换
var choseTab = document.getElementsByClassName('choseTab');
var content = document.getElementsByClassName('content');
for (var i = 0; i < choseTab.length; i++) {
    choseTab[i].setAttribute('index', i);
    choseTab[i].onclick = function () {
        var index_ = this.getAttribute('index');
        for (var j = 0; j < choseTab.length; j++) {
            choseTab[j].classList.remove('active');
            choseTab[index_].classList.add('active');
        }
        for (var k = 0; k < content.length; k++) {
            content[k].style.display = 'none';
            content[index_].style.display = 'block';
        }
    }
}
// 点位分布统计模块
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".left-bottomfl"));
    // 2. 指定配置项和数据
    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        series: [
            {
                name: '老陈学员分布',
                // pie 饼图  
                type: 'pie',
                // 百分比 具体指都可以  百分比加一号
                // 1：内圆的半径  2 外圆的半径
                radius: ['10%', '70%'],
                // 设置水平方向  垂直方法  50% 居中
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 4,
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '河南' }
                ]
            }
        ]
    };

    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);

    window.addEventListener('load', function () {
        myChart.resize()
    });
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();
//全球用户总量
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".user-fl"));
    // 中间省略的数据  准备三项
    var item = {
        name: '',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        },
    }
    // 2. 指定配置和数据
    var option = {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#00fffb' // 0% 处的颜色
            }, {
                offset: 1, color: '#0061ce' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },
        // 图表边界控制
        grid: {
            // 距离 上右下左 的距离
            left: '0%',
            right: '4%',
            bottom: '3%',
            top: '3%',
            // 是否包含文本
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        // 控制x轴
        xAxis: [
            {
                // 使用类目，必须有data属性
                type: 'category',
                // 使用 data 中的数据设为刻度文字
                data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                // 刻度设置
                axisTick: {
                    // true意思：图形在刻度中间
                    // false意思：图形在刻度之间
                    alignWithLabel: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                    }
                }
            }
        ],
        // 控制y轴
        yAxis: [
            {
                // 使用数据的值设为刻度文字
                type: 'value',
                axisTick: {
                    show: false
                },
            }
        ],
        // 控制x轴
        series: [
            {
                // 图表数据名称
                name: '用户统计',
                // 图表类型
                type: 'bar',
                // 柱子宽度
                barWidth: '60%',
                // 数据
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    };

    // 3. 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize()
    });
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();
// 订单模块 订单显示隐藏 订单自动切换
(function () {
    var inner = document.getElementsByClassName('inner')[0].children;
    var orderData = document.getElementsByClassName('orderData');
    var index_ = 0;
    var timer = null;//计时器
    for (var i = 0; i < inner.length; i++) {
        inner[i].setAttribute('index', i);
        inner[i].onclick = function () {
            index_ = this.getAttribute("index");
            for (var j = 0; j < inner.length; j++) {
                inner[j].classList.remove('active');
                inner[index_].classList.add('active');
            }
            for (var k = 0; k < orderData.length; k++) {
                orderData[k].classList.add('orderDataHidden');
                orderData[index_].classList.remove('orderDataHidden');
            }
        }

    }
    function fn() {
        timer = setInterval(function () {
            index_++;
            if (index_ >= inner.length) {
                index_ = 0;
            }
            inner[index_].onclick();
        }, 2000)
    }
    fn()
    var order = document.getElementsByClassName('order')[0];
    order.onmouseenter = function () {
        clearInterval(timer);
    }
    order.onmouseleave = function () {
        fn(), 2000;
    }
})();
//曲线图
(function () {
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    var myChart = echarts.init(document.querySelector('.slines'));

    var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [
            {
                name: '预期销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[0],
                smooth: true// 折现变圆滑
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[1],
                smooth: true
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize()
    });
    window.addEventListener('resize', function () {
        myChart.resize()
    })
    //点击切换年月日
    var timeTab = document.getElementsByClassName('timeTab');
    var index_ = 0;
    var timer = null;
    for (var i = 0; i < timeTab.length; i++) {
        timeTab[i].setAttribute('index', i);
        timeTab[i].onclick = function () {
            index_ = this.getAttribute('index');
            for (var j = 0; j < timeTab.length; j++) {
                timeTab[j].classList.remove('active');
                timeTab[index_].classList.add('active');
            }
            var dataTime = this.getAttribute('data-time');
            option.series[0].data = data[dataTime][0];
            option.series[1].data = data[dataTime][1];
            myChart.setOption(option);
        }
    }
    function auto() {
        timer = setInterval(function () {
            index_++;
            if (index_ >= timeTab.length) {
                index_ = 0;
            }
            timeTab[index_].onclick();
        }, 2000)
    }
    auto();
    // 鼠标移入暂停 移出继续
    var sales = document.querySelector('.sales');
    sales.onmouseenter = function () {
        clearInterval(timer);
    }
    sales.onmouseleave = function () {
        auto();
    }
})();
//雷达图
(function () {
    var myChart = echarts.init(document.querySelector('.rader'));
    var option = {
        radar: {
            //控制圆的大小
            radius: '65%',
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            shape: 'circle',
            // 整个雷达图 有几个圈
            splitNumber: 4,
            axisName: {
                //雷达图 文字的颜色
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['60%', '0%'],
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        series: [
            {
                name: 'Beijing',
                type: 'radar',
                lineStyle: {
                    normal: {
                        color: '#fff',
                        // width: 1
                    }
                },
                data: [[90, 100, 56, 11, 34]],
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                    color: '#fff'
                },
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                },


            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();


