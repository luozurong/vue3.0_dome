const DOMAIN_MAP =  require('./config/index').DOMAIN_MAP
console.log(`当前运行域名是:  ${DOMAIN_MAP[process.env.NODE_ENV]}  当前运行环境是: ${process.env.NODE_ENV}  参数:${process.env.VUE_APP_Coaclss}`)

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  outputDir: "dist",
  assetsDir: "static",
  configureWebpack: {
    output: {
      filename: `[name].js`
    }
  },
  lintOnSave: true,           // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  devServer: {
    host: "0.0.0.0",           //局域网和本地访问
    port: "8080",
    hot: true,
    open: false,                // 自动打开浏览器
    overlay: {
      warning: false,
      error: true
    },
    proxy: {                     // 跨域代理
      "/bdpapi": {
        target: DOMAIN_MAP[process.env.NODE_ENV], // 目标代理服务器地址
        changeOrigin: true,       //允许跨域
        port: '8088',
        ws: true,
        pathRewrite: {
          "^/bdpapi": "/bdpapi"
        }
      }
    }
  },
  chainWebpack: config => {      // 代码分割
    // config.plugins.delete('preload') 
    config.plugins.delete('prefetch')  //  阻止加载全部打包文件
    config.optimization.minimize(true)
    config.optimization.splitChunks({
      chunks: 'all'
    })
  }
}
