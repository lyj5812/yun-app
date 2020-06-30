const TransformPages = require('uni-read-pages')
const tfPages = new TransformPages()
module.exports = {
  // 选项...
  transpileDependencies: ['uni-simple-router'],
  // 配置路径别名
  configureWebpack: {
    plugins: [
      new tfPages.webpack.DefinePlugin({
        ROUTES: JSON.stringify(tfPages.routes)
      })
    ]
  }
}
