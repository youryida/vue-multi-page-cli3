/**
 * vue.config.js
 * docs https://cli.vuejs.org/zh/config/
 */
//区分环境 process.env.NODE_ENV !== 'production'

//获取当前局域网IP
const os = require("os");
const ifaces = os.networkInterfaces();
let LANIP = "0.0.0.0";
Object.keys(ifaces).forEach(function(ifname) {
  let alias = 0;
  ifaces[ifname].forEach(function(iface) {
    if ("IPv4" !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }
    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      // console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      // console.log(ifname, iface.address);
      LANIP = iface.address;
    }
    ++alias;
  });
});

module.exports = {
  baseUrl: "/",
  outputDir: "dist",
  assetsDir: "assets",
  pages: {
    demo1: {
      // page 的入口
      entry: "src/pages/demo1/main.js",
      // 模板来源
      template: "src/pages/demo1/index.html",
      // 在 dist/index.html 的输出
      filename: "demo1/index.html"
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    demo2: {
      // page 的入口
      entry: "src/pages/demo2/main.js",
      // 模板来源
      template: "src/pages/demo2/index.html",
      // 在 dist/index.html 的输出
      filename: "demo2/index.html"
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  lintOnSave: true,
  runtimeCompiler: true,
  // transpileDependencies:[]
  css: {
    modules: true
  },
  devServer: {
    open: true,
    host: LANIP,
    // historyApiFallback: true,
    historyApiFallback: {
      rewrites: [
        //所有请求打到对应的一级path下的/index.html
        {
          from: /^(\/.+?\/).+/,
          to: function(context) {
            return context.match[1] + "/index.html";
          }
        }
      ]
    },
    proxy: {
      "^/api/sohu-fashion/": {
        target: "http://fashion.sohu.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api/sohu-fashion": ""
          // "^/api/sohu-fashion/(.*)": "/$1"
        }
      }
    },
    //lint 错误时浏览器overlay 同时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    }
  }
  //修改webpack 原始配置
  // ,chainWebpack: config => {
  //   config.module
  //     .rule("eslint")
  //     .use("eslint-loader")
  //     .loader("eslint-loader")
  //     .tap(options => {
  //       // options.fix = true;//为什么加了这行，非但没有自动fix，反而lint warn都没了 @liuxuefeng 20181011
  //       return options;
  //     });
  // }
};
