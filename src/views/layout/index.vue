<template>
  <el-container class="layout-container">
    <el-aside width="180px">
      <side-bar></side-bar>
    </el-aside>
    <el-main>
      <div class="navbar clearfix">
        <div class="breadcrumb-container">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="right-menu">
          <el-tooltip effect="dark" content="全屏" placement="bottom">
            <i class="iconfont icon-quanping" @click="toggleFullScreen"></i>
          </el-tooltip>
          <el-tooltip effect="dark" content="语言" placement="bottom">
            <i class="iconfont icon-wenzi"></i>
          </el-tooltip>
          <el-tooltip effect="dark" content="换肤" placement="bottom">
            <el-color-picker v-model="color"></el-color-picker>
          </el-tooltip>
          <img :src="require('@/assets/imgs/avatar.gif')" alt="">
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import sideBar from './sideBar';
import screenfull from 'screenfull'
export default {
  components: {
    sideBar
  },
  data () {
    return {
      color: '#409EFF'
    }
  },
  methods: {
    getFile(url) {
      return new Promise((resolve, reject) => {
        let httpRequest = new XMLHttpRequest()
        httpRequest.onreadystatechange = () => {
          if (httpRequest.readyState !== 4) {
            return
          }
          if (httpRequest.status == 200) {
            resolve(httpRequest.response)
          } else {
            reject(new Error(httpRequest.statusText))
          }
        }
        httpRequest.open('GET', url)
        httpRequest.send()

      })
    },
    getIndexStyle() {
      this.getFile('//unpkg.com/element-ui/lib/theme-chalk/index.css').then(data => {
        console.log(data)
      })
    },
    toggleFullScreen() {
      if (!screenfull.enabled) {
        this.$message({
          message: 'your browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    }
  },
  created () {
    this.getIndexStyle()
  }
};
</script>
<style lang="less" scoped>
.layout-container {
  height: auto;
  min-height: 100%;
  .navbar {
    padding: 0 10px;
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid #fafafa;
    .breadcrumb-container {
      float: left;
      height: 42px;
      .el-breadcrumb {
        font-size: 10px;
        line-height: 42px;
      }
      .el-breadcrumb__inner a,
      .el-breadcrumb__inner.is-link {
        font-weight: normal;
        text-decoration: none;
        -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
    .right-menu {
      float: right;
      font-size: 0;
      height: 42px;
      i {
        margin-right: 16px;
        display: inline-block;
        font-size: 14px;
        vertical-align: top;
      }
      img {
        margin-top: 6px;
        width: 30px;
        height: 30px;
        border-radius: 5px;
      }
    }
  }
}
</style>


