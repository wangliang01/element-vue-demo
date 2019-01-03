<template>
  <div class="login">
    <el-row class="login-container">
      <el-col>
        <h2>后台管理系统</h2>
        <el-form>
          <el-form-item class="form-item">
            <i class="iconfont icon-user"></i>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <i class="iconfont icon-lock1"></i>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" class="login-btn">登 录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'login'
}
</script>
<style lang="less" scoped>
.login{
  min-height: 100%;
  background-image: url('../../assets/imgs/bg/9.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-container{
    margin-top: -100px;
    padding: 20px;
    width: 420px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.4);
    h2{
      text-align: center;
      color: #fff;
    }
    .el-form-item__content{
      .iconfont{
        display: inline-block;
        flex: 0 0 40px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 24px;
        color: #fff;
        text-align: center;
        float: left;
      }
      .el-input{
        float: left;
        width: calc(100% - 40px);
      }
    }
    .login-btn{
      display: block;
      width: 100%;
    }
  }
}
</style>


