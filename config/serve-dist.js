/**
 * 构建成功后，本地预览dist/下的部署版本
 */

// import proxyTable from "./proxyTable.config.js";
const proxyTableConfig = require("./proxyTable.config.js");
console.log(proxyTableConfig);

const httpProxyMiddleware = require("http-proxy-middleware");
const browserSync = require("browser-sync").create();

let ENV = "test";

//一级path后的html请求，都打到/index.html for history 模式
const proxyHtml = httpProxyMiddleware(["/demo1/**", "!/demo1/index.html"], {
  target: "http://10.2.146.81:3000",
  pathRewrite: {
    "^/demo1/.*": "/demo1/index.html"
  },
  changeOrigin: false
});

let proxyAPIArray = [],
  proxyTable = proxyTableConfig[ENV];
for (let path in proxyTable) {
  let targetHost = proxyTable[path];
  let pathRewrite = {};
  pathRewrite[`^${path}`] = "/";
  let hpm = httpProxyMiddleware([path], {
    target: `http://${targetHost}`,
    pathRewrite,
    changeOrigin: true,
    headers: {
      host: targetHost,
      origin: `http://${targetHost}`
    }
  });
  proxyAPIArray.push(hpm);
}
// const proxyAPI = httpProxyMiddleware(["/api/sohu-fashion/"], {
//   target: "http://fashion.sohu.com",
//   pathRewrite: {
//     "^/api/sohu-fashion": ""
//     // "^/api/sohu-fashion/(.*)": "/$1"
//   },
//   changeOrigin: true,
//   headers: {
//     host: "fashion.sohu.com",
//     origin: "http://fashion.sohu.com"
//   }
// });

//初始化并启动服务
browserSync.init({
  server: {
    baseDir: "dist",
    directory: true //应该自动生成一个存放多个子项目的html，然后关掉这个目录浏览
  },
  ui: {
    port: 3030
  },
  host: undefined,
  open: "external", //
  startPath: "/",
  ghostMode: false, //关掉多设备同步
  middleware: [proxyHtml, ...proxyAPIArray]
});
