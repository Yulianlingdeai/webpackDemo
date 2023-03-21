import * as echarts from "echarts";
let actualForecastData = [
    {
        time: "05月31日12时",
        modelData: [
            {
                obsName: "obs",
                dataList: {
                    0: 20.8,
                    9: 28.1,
                    12: 23.6,
                    21: 13.8,
                    24: 21.2,
                    27: 29.8,
                    30: 33.1,
                    33: 32.4,
                    36: 29.3,
                    39: 22.7,
                    42: 18.3,
                    45: 16.8,
                    48: 23.4,
                    51: 30.5,
                    54: 34.7,
                    57: 34.1,
                    60: 30.5,
                    63: 25.4,
                    66: 22.2,
                    69: 21.3,
                    72: 23.7
                }
            },
            {
                modelName: "T1279",
                dataList: {
                    0: 21.07,
                    9: 27.42,
                    12: 22.25,
                    21: 11.06,
                    24: 21.28,
                    27: 29.29,
                    30: 32.85,
                    33: 32.96,
                    36: 25.89,
                    39: 22.37,
                    42: 18.06,
                    45: 14.16,
                    48: 23.8,
                    51: 30.6,
                    54: 35.45,
                    57: 34.65,
                    60: 28.38,
                    63: 24.82,
                    66: 20.87,
                    69: 19.46,
                    72: 23.67
                }
            },
            {
                modelName: "EC",
                dataList: {
                    0: 23.42,
                    9: 29.21,
                    12: 24.53,
                    21: 14.13,
                    24: 21.82,
                    27: 29.76,
                    30: 33.51,
                    33: 32.47,
                    36: 27.68,
                    39: 23.76,
                    42: 19.26,
                    45: 17.11,
                    48: 23.73,
                    51: 29.63,
                    54: 34.23,
                    57: 33.68,
                    60: 28.72,
                    63: 24.02,
                    66: 22,
                    69: 20.89,
                    72: 24.93
                }
            },
            {
                modelName: "TIANJI",
                dataList: {
                    0: 24.42,
                    12: 25.37,
                    24: 24.97,
                    36: 29.17,
                    48: 25.56,
                    60: 29.85,
                    72: 26
                }
            }
        ]
    },
    {
        time: "06月01日12时",
        modelData: [
            {
                obsName: "obs",
                dataList: {
                    0: 21.2,
                    3: 29.8,
                    6: 33.1,
                    9: 32.4,
                    12: 29.3,
                    15: 22.7,
                    18: 18.3,
                    21: 16.8,
                    24: 23.4,
                    27: 30.5,
                    30: 34.7,
                    33: 34.1,
                    36: 30.5,
                    39: 25.4,
                    42: 22.2,
                    45: 21.3,
                    48: 23.7,
                    51: 28.3,
                    54: 32.8,
                    57: 33.5,
                    60: 30,
                    63: 26,
                    66: 25.6,
                    69: 24.2,
                    72: 21.8
                }
            },
            {
                modelName: "T1279",
                dataList: {
                    0: 21.19,
                    3: 29.54,
                    6: 33.31,
                    9: 33.51,
                    12: 26.5,
                    15: 23.22,
                    18: 18.99,
                    21: 14.77,
                    24: 25.1,
                    27: 31.58,
                    30: 36.39,
                    33: 35.49,
                    36: 29.15,
                    39: 24.08,
                    42: 20.43,
                    45: 19.1,
                    48: 24.8,
                    51: 29.51,
                    54: 34.55,
                    57: 35.75,
                    60: 30.05,
                    63: 26.24,
                    66: 23.48,
                    69: 22.81,
                    72: 22.52
                }
            },
            {
                modelName: "EC",
                dataList: {
                    0: 23.51,
                    3: 29.47,
                    6: 33.84,
                    9: 33.37,
                    12: 27.81,
                    15: 24.68,
                    18: 19.82,
                    21: 17.39,
                    24: 24.15,
                    27: 30.36,
                    30: 34.84,
                    33: 34.82,
                    36: 29.54,
                    39: 24.13,
                    42: 21.31,
                    45: 20.06,
                    48: 23.99,
                    51: 29.71,
                    54: 33.88,
                    57: 34.91,
                    60: 29.79,
                    63: 24.66,
                    66: 23.17,
                    69: 21.28,
                    72: 21.25
                }
            },
            {
                modelName: "TIANJI",
                dataList: {
                    0: 24.49,
                    12: 29.1,
                    24: 26.92,
                    36: 30.28,
                    48: 26.15,
                    60: 30.42,
                    72: 26.24
                }
            }
        ]
    }
];
actualForecastData = actualForecastData.map((item) => {
    if (item.time.includes("12时")) {
        item.modelData = item.modelData.map((element) => {
            let dataList = { ...element.dataList };
            element.dataList = {};
            Object.keys(dataList)
                .sort((a, b) => +a - +b)
                .forEach((key) => {
                    element.dataList[+key + 12] = dataList[key];
                });
            return element;
        });
        console.log("item.time===>>>>>", item.time);
    }
    return item;
});
console.log("actualForecastData==>>>>>", actualForecastData);

let response = {
    code: "200",
    message: "请求成功",
    data: [
        {
            time: "24日00时",
            modelData: [
                {
                    obsName: "TEEE",
                    dataList: {
                        0: 100.0,
                        3: 100.0,
                        6: 51.16,
                        9: 54.74,
                        12: 40.74,
                        15: 51.16,
                        18: 51.16,
                        21: 40.74,
                        24: 51.16,
                        27: 40.74,
                        30: 51.16,
                        33: 51.16,
                        36: 51.16,
                        39: 51.16,
                        42: 51.16,
                        45: 51.16,
                        48: 51.16,
                        51: 51.16,
                        54: 51.16,
                        57: 51.16,
                        60: 51.16,
                        63: 51.16,
                        66: 51.16,
                        69: 51.16,
                        72: 51.16
                    }
                },
                {
                    modelName: "EC",
                    dataList: {
                        0: 100.0,
                        3: 100.0,
                        6: 51.16,
                        9: 54.74,
                        12: 40.74,
                        15: 51.16,
                        18: 51.16,
                        21: 40.74,
                        24: 51.16,
                        27: 40.74,
                        30: 51.16,
                        33: 51.16,
                        36: 51.16,
                        39: 51.16,
                        42: 51.16,
                        45: 51.16,
                        48: 51.16,
                        51: 51.16,
                        54: 51.16,
                        57: 51.16,
                        60: 51.16,
                        63: 51.16,
                        66: 51.16,
                        69: 51.16,
                        72: 51.16
                    }
                }
            ]
        },
        {
            time: "25日00时",
            modelData: [
                {
                    obsName: "TEEE",
                    dataList: {
                        0: 100.0,
                        3: 100.0,
                        6: 51.16,
                        9: 54.74,
                        12: 40.74,
                        15: 51.16,
                        18: 51.16,
                        21: 40.74,
                        24: 51.16,
                        27: 40.74,
                        30: 51.16,
                        33: 51.16,
                        36: 51.16,
                        39: 51.16,
                        42: 51.16,
                        45: 51.16,
                        48: 51.16,
                        51: 51.16,
                        54: 51.16,
                        57: 51.16,
                        60: 51.16,
                        63: 51.16,
                        66: 51.16,
                        69: 51.16,
                        72: 51.16
                    }
                },
                {
                    modelName: "EC",
                    dataList: {
                        0: 100.0,
                        3: 100.0,
                        6: 51.16,
                        9: 54.74,
                        12: 40.74,
                        15: 51.16,
                        18: 51.16,
                        21: 40.74,
                        24: 51.16,
                        27: 40.74,
                        30: 51.16,
                        33: 51.16,
                        36: 51.16,
                        39: 51.16,
                        42: 51.16,
                        45: 51.16,
                        48: 51.16,
                        51: 51.16,
                        54: 51.16,
                        57: 51.16,
                        60: 51.16,
                        63: 51.16,
                        66: 51.16,
                        69: 51.16,
                        72: 51.16
                    }
                }
            ]
        }
    ]
};
const white = true;
let xAxisData = [];
let xAxisDataLength = (response.data.length + 3) * 8; // 五天 24小时

let xAxisDataXaxis = [0, 1, 2, 3, 4].map((item, index) => {
    let element = null;
    if (response.data[index]) {
        element = response.data[index];
    } else {
        element = response.data[0];
    }
    return element;
});
let day = 25;
for (let i = 0; i <= xAxisDataLength; i++) {
    let current = i * 3;
    if (current >= 24) {
        current = current % 24;
        if (current === 0) {
            day = day + 1;
        }
    }
    xAxisData.push(`${day}日${current}时`);
}
console.log("xAxisData===>>>>", xAxisData);
let dom = document.getElementById("myChart");
let myChart = echarts.init(dom);
myChart.clear();
const legendData = response.data[0].modelData.map((item) => item.obsName || item.modelName);
// 绘制图表
let options = {
    graphic: [
        {
            type: "text",
            left: 20,
            top: "middle",
            // originX: 0,
            // originY: 0,
            rotation: 83.25,
            z: 100,
            style: {
                fill: "#000",
                // x: 100,
                // y: 250,
                textOffset: [20, 20],
                textWidth: 16,
                text: "起报时间",
                fontSize: 16,
                textVerticalAlign: "top"
                // textOrigin: "center",
                // transformText: true,
                // textRotation: 90
                // textContent: "y轴",
            }
            // info: "y轴",
            // invisible: true
        }
    ],
    emphasis: {
        label: {
            position: "left",
            padding: [0, 0, 0, 0]
        }
    },
    legend: {
        // show: false,
        // x: "left",
        // data: xAxisLabelList,
        // padding: [0, 0, 0, 20],
        // textStyle: {
        //     color: white ? "#000" : "#fff",
        //     fontSize: "16px"
        // },
        // icon: "circle",
        // formatter: (params) => {
        //     return params;
        // }
        data: legendData
    },
    grid: [
        //0降雨
        { x: "0%", height: "17%", left: "10%", top: "73%" },
        { x: "0%", height: "17%", left: "10%", top: "56%" },
        { x: "0%", height: "17%", left: "10%", top: "39%" },
        { x: "0%", height: "17%", left: "10%", top: "22%" },
        { x: "0%", height: "17%", left: "10%", top: "5%" }
        // {
        //     // show: true,
        //     left: "0",
        //     top: "60",
        //     right: "20",
        //     bottom: "40",
        //     containLabel: true
        // },
    ],
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "cross", // 默认为直线，可选为：'line' | 'shadow' 'cross'
            label: {
                color: white ? "#000" : "#fff",
                backgroundColor: "#6e7079"
            }
        },
        formatter: (params) => {
            let content = params.map((item) => {
                return `<div style="display: flex;justify-content: space-between;width:100%">
                    <span style="color: #A46EF7">${item.seriesName}:</span>
                    <span>${item.value}</span>
                </div>`;
            });
            return `<div style='width:200px;min-height:128px;'>
                <div style='background:#235790;color: #fff;margin:-11px;padding:5px 0 0 10px;height:34px;font-size:18px;line-height:34px'>
                    ${params[0].name}
                </div>
                <br>
                ${content.join("")}
            </div>`;
        }
    },
    xAxis: [
        {
            type: "category",
            gridIndex: 0,
            // data: xAxisData,
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], //, "1月", "2月",
            axisLine: {
                lineStyle: {
                    color: white ? "#000" : "#fff"
                }
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: white ? "#000" : "#fff"
                }
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            position: "left",
            name: "y轴",
            nameLocation: "middle",
            nameTextStyle: {
                verticalAlign: "middle"
            },
            nameGap: 40,
            nameRotate: 0,
            gridIndex: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    color: white ? "#000" : "#fff"
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: white ? "#cfcfcf" : "rgba(255, 255, 255, 0.6)"
                }
            },
            axisLabel: {
                show: true,
                showMaxLabel: false,
                showMinLabel: false,
                textStyle: {
                    color: white ? "#000" : "#fff"
                }
            },
            splitNumber: 2,
            scale: true,
            axisTick: {
                length: 5
            }
        }
    ],
    // series: series,
    series: [
        {
            name: "蒸发量",
            type: "line",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, NaN, NaN]
        },
        {
            name: "降水量",
            type: "line",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [32.6, 20.0, 6.4, 3.3, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, NaN, NaN]
        },
        {
            name: "蒸发量",
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [NaN, NaN, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 2.0, 4.9, 7.0, 23.2]
        },
        {
            name: "降水量",
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [NaN, NaN, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8]
        },
        {
            name: "蒸发量",
            type: "line",
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: [NaN, NaN, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 2.0, 4.9, 7.0, 23.2]
        },
        {
            name: "降水量",
            type: "line",
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: [NaN, NaN, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8]
        },
        {
            name: "蒸发量",
            type: "line",
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: [NaN, NaN, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 2.0, 4.9, 7.0, 23.2]
        },
        {
            name: "降水量",
            type: "line",
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: [NaN, NaN, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8]
        },
        {
            name: "蒸发量",
            type: "line",
            xAxisIndex: 4,
            yAxisIndex: 4,
            data: [NaN, NaN, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 2.0, 4.9, 7.0, 23.2]
        },
        {
            name: "降水量",
            type: "line",
            xAxisIndex: 4,
            yAxisIndex: 4,
            data: [NaN, NaN, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8]
        }
    ],
    animationDuration: 600
};
options.yAxis = xAxisDataXaxis.map((item, index) => {
    return {
        type: "value",
        position: "left",
        // name: "y轴",
        name: `2${index + 5}日00时 ${index}`,
        nameLocation: "middle",
        nameTextStyle: {
            verticalAlign: "middle"
        },
        nameGap: 30,
        nameRotate: 0,
        gridIndex: index,
        axisLine: {
            show: true,
            lineStyle: {
                color: white ? "#000" : "#fff"
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: white ? "#cfcfcf" : "rgba(255, 255, 255, 0.6)"
            }
        },
        axisLabel: {
            show: true,
            showMaxLabel: false,
            showMinLabel: false,
            textStyle: {
                color: white ? "#000" : "#fff"
            }
        },
        splitNumber: 2,
        scale: true,
        axisTick: {
            length: 5
        }
    };
});
options.xAxis = xAxisDataXaxis.map((item, index) => {
    let xAxis = {
        type: "category",
        gridIndex: index,
        data: xAxisData,
        // boundaryGap: item === 4 ? false : true,
        boundaryGap: false,
        // data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], //
        axisLine: {
            lineStyle: {
                color: white ? "#000" : "#fff"
            }
        },
        axisLabel: {
            show: index === 0 ? true : false,
            interval: 3,
            textStyle: {
                color: white ? "#000" : "#fff"
            }
        },
        axisTick: {
            show: index === 0 ? true : false,
            // show: true,
            interval: 3,
            alignWithLabel: index === 0 ? false : true
        }
    };
    if (index === 0) {
        xAxis.name = "实况时间";
        xAxis.nameLocation = "middle";
        xAxis.nameTextStyle = {
            fontSize: 16,
            padding: [10, 0, 0, 0]
        };
    }
    return xAxis;
});
options.series = legendData.reduce((total, item) => {
    let current = [0, 1, 2, 3, 4].map((element) => {
        return {
            name: item,
            type: "line",
            xAxisIndex: element,
            yAxisIndex: element,
            data: xAxisData.map(() => Math.random() * 100)
        };
    });
    return [...total, ...current];
}, []);
myChart.setOption(options);
