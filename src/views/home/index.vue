<template>
  <div class="home">
    <div class="home-tips clearfix">
      <div class="fl">
        <span class="label">Supporter</span>
        <a href="#" class="text">
          <strong class="weight">CodeFund</strong>
          has raised over $42,000 for OSS developers. Do you qualify? 🤔
        </a>
      </div>
      <div class="fr">
        <a href="#" class="text">ethical ads via CodeFund</a>
      </div>
    </div>
    <div class="home-container">
      <div class="panel-group">
        <el-row :gutter="40" style="margin-bottom: 32px;">
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
            <div class="card-panel clearfix">
              <div class="card-panel-icon fl"></div>
              <div class="card-panel-description fr">
                <span class="card-panel-text">New Visits</span>
                <span class="card-panel-num">
                  <countTo :startVal="0" :endVal="102400" :duration="3000"></countTo>
                </span>
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
            <div class="card-panel clearfix">
              <div class="card-panel-icon fl"></div>
              <div class="card-panel-description fr">
                <span class="card-panel-text">New Visits</span>
                <span class="card-panel-num">
                  <countTo :startVal="0" :endVal="102400" :duration="3000"></countTo>
                </span>
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div></div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
            <div class="card-panel clearfix">
              <div class="card-panel-icon fl"></div>
              <div class="card-panel-description fr">
                <span class="card-panel-text">New Visits</span>
                <span class="card-panel-num">
                  <countTo :startVal="0" :endVal="102400" :duration="3000"></countTo>
                </span>
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
            <div class="card-panel clearfix">
              <div class="card-panel-icon fl"></div>
              <div class="card-panel-description fr">
                <span class="card-panel-text">New Visits</span>
                <span class="card-panel-num">
                  <countTo :startVal="0" :endVal="102400" :duration="3000"></countTo>
                </span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row style="margin-bottom: 32px;">
        <el-col class="chart" :xs="24" :xm="24" :md="24" :lg="24" :xl="24">
          <v-chart :options="lineOptions"></v-chart>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 32px;">
        <el-col :xs="12" :xm="12" :md="12" :lg="12" :xl="8" class="chart">
          <v-chart :options="polar"></v-chart>
        </el-col>
        <el-col :xs="12" :xm="12" :md="12" :lg="12" :xl="8" class="chart">
          <v-chart :options="line2Options"></v-chart>
        </el-col>
        <!-- <el-col :xs="12" :xm="12" :md="12" :lg="8" :xl="6" class="chart">
          <v-chart :options="options"></v-chart>
        </el-col> -->
        <el-col :xs="12" :xm="12" :md="12" :lg="12" :xl="8" class="chart">
          <v-chart :options="browserOption"></v-chart>
        </el-col>
      </el-row>
      <el-row :gutter="8" style="margin-bottom: 32px;">
        <el-col :xs="24" :xm="24" :md="24" :lg="24" :xl="12">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
              <template slot-scope="scope">
                <el-tag size="medium" :type="scope.row.type">{{ scope.row.address }}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :xs="24" :xm="12" :md="12" :lg="12" :xl="6">
          <section class="todoapp">
            <header class="header">
              <input type="text" class="new-todo" autocomplete="off" placeholder="Todo List">
            </header>
              <section class="main">
                <input type="checkbox" id="toggle-all" class="toggle-all">
                <label for="toggle-all" class="el-icon-arrow-down"></label>
                <ul class="todo-list">
                  <li class="todo">
                    <div class="view">
                      <input type="checkbox" class="toggle">
                      <label for="">star this repository</label>
                      <button class="destroy"></button>
                    </div>
                    <input type="text" class="edit" style="display: none;">
                </li>
                </ul>
              </section>
              <footer class="footer">
                <span class="todo-count"></span>
                <ul class="filters">
                  <li><a href="#" class="selected">All</a></li>
                  <li><a href="#">active</a></li>
                  <li><a href="#">Completed</a></li>
                </ul>
              </footer>
          </section>
        </el-col>
        <el-col :xs="24" :xm="12" :md="12" :lg="12" :xl="6"></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import countTo from 'vue-count-to';

export default {
  components: {
    countTo
  },
  data() {
    return {
      polar: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' }
            ]
          }
        ]
      },
      lineOptions: {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      line2Options: {
        visualMap: {
          top: 'middle',
          right: 10,
          color: ['red', 'yellow', 'orange', 'green', 'lime'],
          calculable: true
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      },
      browserOption: {
        title: {
          text: '浏览器占比变化',
          subtext: '纯属虚构',
          top: 10,
          left: 10
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(0,0,250,0.2)'
        },
        legend: {
          type: 'scroll',
          bottom: 10,
          data: (function() {
            var list = [];
            for (var i = 1; i <= 28; i++) {
              list.push(i + 2000 + '');
            }
            return list;
          })()
        },
        visualMap: {
          top: 'middle',
          right: 10,
          color: ['red', 'yellow'],
          calculable: true
        },
        radar: {
          indicator: [
            { text: 'IE8-', max: 400 },
            { text: 'IE9+', max: 400 },
            { text: 'Safari', max: 400 },
            { text: 'Firefox', max: 400 },
            { text: 'Chrome', max: 400 }
          ]
        },
        series: (function() {
          var series = [];
          for (var i = 1; i <= 28; i++) {
            series.push({
              name: '浏览器（数据纯属虚构）',
              type: 'radar',
              symbol: 'none',
              lineStyle: {
                width: 1
              },
              emphasis: {
                areaStyle: {
                  color: 'rgba(0,250,0,0.3)'
                }
              },
              data: [
                {
                  value: [
                    (40 - i) * 10,
                    (38 - i) * 4 + 60,
                    i * 5 + 10,
                    i * 9,
                    (i * i) / 2
                  ],
                  name: i + 2000 + ''
                }
              ]
            });
          }
          return series;
        })()
      },
      options: {
        tooltip: {
          formatter: '{a} <br/>{c} {b}'
        },
        toolbox: {
          show: true,
          feature: {
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '速度',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: '50%',
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 10
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {
              // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            axisLabel: {
              backgroundColor: 'auto',
              borderRadius: 2,
              color: '#eee',
              padding: 3,
              textShadowBlur: 2,
              textShadowOffsetX: 1,
              textShadowOffsetY: 1,
              textShadowColor: '#222'
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 20,
              fontStyle: 'italic'
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              formatter: function(value) {
                value = (value + '').split('.');
                value.length < 2 && value.push('00');
                return (
                  ('00' + value[0]).slice(-2) +
                  '.' +
                  (value[1] + '00').slice(0, 2)
                );
              },
              fontWeight: 'bolder',
              borderRadius: 3,
              backgroundColor: '#444',
              borderColor: '#aaa',
              shadowBlur: 5,
              shadowColor: '#333',
              shadowOffsetX: 0,
              shadowOffsetY: 3,
              borderWidth: 2,
              textBorderColor: '#000',
              textBorderWidth: 2,
              textShadowBlur: 2,
              textShadowColor: '#fff',
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              fontFamily: 'Arial',
              width: 100,
              color: '#eee',
              rich: {}
            },
            data: [{ value: 40, name: 'km/h' }]
          },
          {
            name: '转速',
            type: 'gauge',
            center: ['20%', '55%'], // 默认全局居中
            radius: '35%',
            min: 0,
            max: 7,
            endAngle: 45,
            splitNumber: 7,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {
              // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width: 5
            },
            title: {
              offsetCenter: [0, '-30%'] // x, y，单位px
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder'
            },
            data: [{ value: 1.5, name: 'x1000 r/min' }]
          },
          {
            name: '油表',
            type: 'gauge',
            center: ['77%', '50%'], // 默认全局居中
            radius: '25%',
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {
              // 坐标轴小标记
              splitNumber: 5,
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            axisLabel: {
              formatter: function(v) {
                switch (v + '') {
                  case '0':
                    return 'E';
                  case '1':
                    return 'Gas';
                  case '2':
                    return 'F';
                }
              }
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width: 2
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            data: [{ value: 0.5, name: 'gas' }]
          },
          {
            name: '水表',
            type: 'gauge',
            center: ['77%', '50%'], // 默认全局居中
            radius: '25%',
            min: 0,
            max: 2,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {
              // 坐标轴小标记
              show: false
            },
            axisLabel: {
              formatter: function(v) {
                switch (v + '') {
                  case '0':
                    return 'H';
                  case '1':
                    return 'Water';
                  case '2':
                    return 'C';
                }
              }
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width: 2
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            data: [{ value: 0.5, name: 'gas' }]
          }
        ]
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          type: 'success'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          type: 'info'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          type: 'warning'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          type: 'danger'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.home {
  min-height: 100%;
  background-color: #f0f2f5;
  .home-tips {
    padding: 12px 15px;
    background-color: #f8f8f8;
    .label {
      margin-right: 4px;
      padding: 2px 6px;
      background-color: #4caf50;
      color: #fff;
      border-radius: 3px;
      font-size: 13px;
    }
    .text {
      cursor: pointer;
      color: #777;
      text-decoration: none;
      font-size: 13px;
      &:hover {
        text-decoration: underline;
      }
    }
    .weight {
      color: #212121;
    }
  }
  .home-container {
    padding: 32px;
    .card-panel {
      margin-bottom: 32px;
      height: 108px;
      background-color: #fff;
      .card-panel-icon {
        display: block;
        width: 48px;
        height: 48px;
        padding: 16px;
        margin: 14px 0 0 14px;
      }
      .card-panel-description {
        margin: 26px 26px 26px 0;
        .card-panel-text,
        .card-panel-num {
          display: block;
        }
        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }
        .card-panel-num {
          font-size: 20px;
          font-weight: 700;
          color: #666;
        }
      }
    }
    .chart {
      min-height: 100px;
      height: 350px;
    }
    .echarts {
      width: 100%;
      min-height: 100%;
      height: 100%;
    }
    .todoapp {
      font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.4em;
      color: #4d4d4d;
      min-width: 230px;
      max-width: 550px;
      margin: 0 auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 300;
      background: #fff;
      z-index: 1;
      position: relative;
      button {
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        font-size: 100%;
        vertical-align: baseline;
        font-family: inherit;
        font-weight: inherit;
        color: inherit;
        -webkit-appearance: none;
        appearance: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      :focus {
        outline: 0;
      }
      .hidden {
        display: none;
      }
      .todoapp {
        background: #fff;
        margin: 130px 0 40px 0;
        position: relative;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
          0 25px 50px 0 rgba(0, 0, 0, 0.1);
      }
      .todoapp input::-webkit-input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }
      .todoapp input::-moz-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }
      .todoapp input::input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }
      .todoapp h1 {
        position: absolute;
        top: -155px;
        width: 100%;
        font-size: 100px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
        -webkit-text-rendering: optimizeLegibility;
        -moz-text-rendering: optimizeLegibility;
        text-rendering: optimizeLegibility;
      }
      .new-todo,
      .edit {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 18px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .new-todo {
        padding: 10px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
      }
      .main {
        position: relative;
        z-index: 2;
        border-top: 1px solid #e6e6e6;
      }
      .toggle-all {
        text-align: center;
        border: none;
        /* Mobile Safari */
        opacity: 0;
        position: absolute;
      }
      .toggle-all + label {
        width: 60px;
        height: 34px;
        font-size: 0;
        position: absolute;
        top: -52px;
        left: -13px;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }
      .toggle-all + label:before {
        content: '❯';
        font-size: 22px;
        color: #e6e6e6;
        padding: 10px 27px 10px 27px;
      }
      .toggle-all:checked + label:before {
        color: #737373;
      }
      .todo-list {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .todo-list li {
        position: relative;
        font-size: 24px;
        border-bottom: 1px solid #ededed;
      }
      .todo-list li:last-child {
        border-bottom: none;
      }
      .todo-list li.editing {
        border-bottom: none;
        padding: 0;
      }
      .todo-list li.editing .edit {
        display: block;
        width: 506px;
        padding: 12px 16px;
        margin: 0 0 0 43px;
      }
      .todo-list li.editing .view {
        display: none;
      }
      .todo-list li .toggle {
        text-align: center;
        width: 40px;
        /* auto, since non-WebKit browsers doesn't support input styling */
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        border: none;
        /* Mobile Safari */
        -webkit-appearance: none;
        appearance: none;
      }
      .todo-list li .toggle {
        opacity: 0;
      }
      .todo-list li .toggle + label {
        /*
    Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
    IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
  */
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
        background-repeat: no-repeat;
        background-position: center left;
        background-size: 36px;
      }
      .todo-list li .toggle:checked + label {
        background-size: 36px;
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
      }
      .todo-list li label {
        word-break: break-all;
        padding: 15px 15px 15px 50px;
        display: block;
        line-height: 1;
        font-size: 14px;
        transition: color 0.4s;
      }
      .todo-list li.completed label {
        color: #d9d9d9;
        text-decoration: line-through;
      }
      .todo-list li .destroy {
        display: none;
        position: absolute;
        top: 0;
        right: 10px;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto 0;
        font-size: 30px;
        color: #cc9a9a;
        transition: color 0.2s ease-out;
        cursor: pointer;
      }
      .todo-list li .destroy:hover {
        color: #af5b5e;
      }
      .todo-list li .destroy:after {
        content: '×';
      }
      .todo-list li:hover .destroy {
        display: block;
      }
      .todo-list li .edit {
        display: none;
      }
      .todo-list li.editing:last-child {
        margin-bottom: -1px;
      }
      .footer {
        color: #777;
        position: relative;
        padding: 10px 15px;
        height: 40px;
        text-align: center;
        border-top: 1px solid #e6e6e6;
      }
      .footer:before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 40px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
          0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
          0 17px 2px -6px rgba(0, 0, 0, 0.2);
      }
      .todo-count {
        float: left;
        text-align: left;
      }
      .todo-count strong {
        font-weight: 300;
      }
      .filters {
        margin: 0;
        padding: 0;
        position: relative;
        z-index: 1;
        list-style: none;
      }
      .filters li {
        display: inline;
      }
      .filters li a {
        color: inherit;
        font-size: 12px;
        padding: 3px 7px;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 3px;
      }
      .filters li a:hover {
        border-color: rgba(175, 47, 47, 0.1);
      }
      .filters li a.selected {
        border-color: rgba(175, 47, 47, 0.2);
      }
      .clear-completed,
      html .clear-completed:active {
        float: right;
        position: relative;
        line-height: 20px;
        text-decoration: none;
        cursor: pointer;
      }
      .clear-completed:hover {
        text-decoration: underline;
      }
      .info {
        margin: 65px auto 0;
        color: #bfbfbf;
        font-size: 10px;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
        text-align: center;
      }
      .info p {
        line-height: 1;
      }
      .info a {
        color: inherit;
        text-decoration: none;
        font-weight: 400;
      }
      .info a:hover {
        text-decoration: underline;
      }
      /*
  Hack to remove background from Mobile Safari.
  Can't use it globally since it destroys checkboxes in Firefox
*/
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        .toggle-all,
        .todo-list li .toggle {
          background: none;
        }
        .todo-list li .toggle {
          height: 40px;
        }
      }
      @media (max-width: 430px) {
        .footer {
          height: 50px;
        }
        .filters {
          bottom: 10px;
        }
      }
    }
  }
}
</style>



