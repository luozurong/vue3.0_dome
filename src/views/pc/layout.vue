<template>
  <el-container>
    <el-aside width="200px">asider</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<style lang="less" scoped>
  .index-box{
    height: 100%;
    width: 100%;
  }
  /deep/ .el-container{
    height: 100vh;
  }
  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;

  }
  /deep/ .el-aside {
    border-right: 1px solid #f0f0f0;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>