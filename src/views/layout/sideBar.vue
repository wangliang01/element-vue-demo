<template>
  <el-menu
  class="side-bar"
  background-color="rgb(48, 65, 86)"
  text-color="#fff"
  text-active-color="#409EFF"
  default-active="home"
  >
    <el-menu-item index="home">
      <i class="iconfont icon-homepage"></i>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="document">
      <i class="iconfont icon-document"></i>
      <span>文档</span>
    </el-menu-item>
    <el-submenu index="authorize">
      <template slot="title">
        <i class="iconfont icon-lock"></i>
        <span>权限测试</span>
      </template>
    </el-submenu>
    <el-submenu index="component">
      <template slot="title">
        <i class="iconfont icon--zujian"></i>
        <span>组件</span>
      </template>
    </el-submenu>
    <el-submenu index="table">
      <template slot="title">
        <i class="iconfont icon-tubiao"></i>
        <span>图表</span>
      </template>
    </el-submenu>
    <el-menu-item index="errorLog">
      <i class="iconfont icon-debug"></i>
      <span>错误日志</span>
    </el-menu-item>
    <el-submenu index="excel">
      <template slot="title">
        <i class="iconfont icon-excel"></i>
        <span>Excel</span>
      </template>
    </el-submenu>
    <el-submenu index="zip">
      <template slot="title">
        <i class="iconfont icon-zip"></i>
        <span>Zip</span>
      </template>
    </el-submenu>
    <el-menu-item index="skin">
      <i class="iconfont icon-huanfu"></i>
      <span>换肤</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.side-bar{
  border: none;
  .iconfont{
    display: inline-block;
    margin-right: 16px;
    font-size: 14px;
  }

}
</style>


