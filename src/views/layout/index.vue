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
          <i class="iconfont icon-wenzi"></i>
          <el-color-picker v-model="themeColor"></el-color-picker>
          <el-dropdown>
            <span class="el-dropdown-link">
              <img :src="require('@/assets/imgs/avatar.gif')" alt="">
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>更换头像</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>

        </div>
      </div>
      <div class="dashboard-container">

      </div>
    </el-main>
  </el-container>
</template>
<script>
import sideBar from './sideBar';
import screenfull from 'screenfull';
import { mapGetters } from 'vuex';

const ORIGINAL_THEME = '#409EFF';
export default {
  components: {
    sideBar
  },
  data() {
    return {
      themeColor: ORIGINAL_THEME,
      originStyle: ''
    };
  },
  computed: {
    ...mapGetters(['theme'])
  },
  watch: {
    themeColor(val, oldVal) {
      if (typeof val !== 'string') return;
      const themeCluster = this.getThemeCluster(val.replace('#', ''));
      const originalCluster = this.getThemeCluster(oldVal.replace('#', ''));
      console.log(themeCluster, originalCluster);
      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(
            ORIGINAL_THEME.replace('#', '')
          );
          const newStyle = this.updateStyle(
            this[variable],
            originalCluster,
            themeCluster
          );

          let styleTag = document.getElementById(id);
          if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.setAttribute('id', id);
            document.head.appendChild(styleTag);
          }

          styleTag.innerText = newStyle;

          // 将主题色存入store
          this.$store.dispatch('updateTheme', this.themeColor);
        };
      };

      const chalkHandler = getHandler('chalk', 'chalk-style');

      if (!this.chalk) {
        const url = `https://unpkg.com/element-ui/lib/theme-chalk/index.css`;
        this.getCSSString(url, chalkHandler, 'chalk');
      } else {
        chalkHandler();
      }

      const styles = [].slice
        .call(document.querySelectorAll('style'))
        .filter(style => {
          const text = style.innerText;
          return (
            new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
          );
        });
      styles.forEach(style => {
        const { innerText } = style;
        if (typeof innerText !== 'string') return;
        style.innerText = this.updateStyle(
          innerText,
          originalCluster,
          themeCluster
        );
      });
      this.$message({
        message: '换肤成功',
        type: 'success'
      });
    }
  },
  methods: {
    getCSSString(url, callback, variable) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '');
          callback();
        }
      };
      xhr.open('GET', url);
      xhr.send();
    },
    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style;
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index]);
      });
      return newStyle;
    },
    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        if (tint === 0) {
          return [red, green, blue].join(',');
        } else {
          red += Math.round(tint * (255 - red));
          green += Math.round(tint * (255 - green));
          blue += Math.round(tint * (255 - blue));

          red = red.toString(16);
          green = green.toString(16);
          blue = green.toString(16);

          return `#${red}${green}${blue}`;
        }
      };

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        red = Math.round((1 - shade) * red);
        green = Math.round((1 - shade) * green);
        blue = Math.round((1 - shade) * blue);

        red = red.toString(16);
        green = green.toString(16);
        blue = blue.toString(16);

        return `#${red}${green}${blue}`;
      };

      const clusters = [theme];
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
      }
      clusters.push(shadeColor(theme, 0.1));
      return clusters;
    },
    toggleFullScreen() {
      if (!screenfull.enabled) {
        this.$message({
          message: 'your browser can not work',
          type: 'warning'
        });
        return false;
      }
      screenfull.toggle();
    }
  },
  created() {
    this.themeColor = this.theme;
  }
};
</script>
<style lang="less" scoped>
.layout-container {
  height: auto;
  min-height: 100%;
  /deep/.el-aside {
    background-color: rgb(48, 65, 86);
    .el-menu-item,
    .el-submenu {
      height: 42px;
      line-height: 42px;
      span {
        font-size: 10px;
      }
    }
    /deep/.el-menu-item {
      &:hover {
        background-color: rgb(38, 52, 69) !important;
      }
    }
    /deep/.el-submenu .el-submenu__title {
      line-height: 42px;
      &:hover {
        background-color: rgb(38, 52, 69) !important;
      }
    }
  }
  .el-main {
    padding: 0;
  }
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
        outline: none;
      }
      /deep/.el-color-picker {
        display: inline-block;
        position: relative;
        margin-right: 16px;
        top: -5px;
        line-height: normal;
        height: auto;
      }
      /deep/.el-color-picker__color {
        border: 1px solid #fff;
      }

      /deep/.el-color-picker__trigger {
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 20px;
        width: 20px;
        padding: 0;
        border-width: 0;
        outline: none;
        border-radius: 4px;
        font-size: 0;
        position: relative;
        cursor: pointer;
      }
    }
  }
}
</style>


