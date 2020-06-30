module.exports = {
  // 选项...
  transpileDependencies: ['uni-simple-router'],
  // 配置路径别名
  configureWebpack: {
    devServer: {
      disableHostCheck: true
    }
  }
}
