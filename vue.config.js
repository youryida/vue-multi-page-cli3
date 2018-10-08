/**
 * vue.config.js
 * docs https://cli.vuejs.org/zh/config/
 */
//区分环境 process.env.NODE_ENV !== 'production'
module.exports = {
  baseUrl: "/",
  outputDir: "dist",
  assetsDir: "assets",
  pages: {
    xiaohua: {
      // page 的入口
      entry: "src/pages/xiaohua/main.js",
      // 模板来源
      template: "src/pages/xiaohua/index.html",
      // 在 dist/index.html 的输出
      filename: "xiaohua/index.html",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  lintOnSave: true,
  // transpileDependencies:[]
  css: {
    modules: true
  },
  devServer: {
    proxy: {
      "/sohu-fashion": {
        target: "http://fashion.sohu.com",
        // target: 'http://sns-api-test2.sohusce.com',
        changeOrigin: true,
        pathRewrite: {
          "^/sohu-fashion": ""
        }
      }
    },
    //lint 错误时浏览器overlay 同时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
