const httpProxyMiddleware = require("http-proxy-middleware");
const browserSync = require("browser-sync").create();

const proxyHtml = httpProxyMiddleware(["/demo1/**", "!/demo1/index.html"], {
  target: "http://10.2.146.81:3000",
  pathRewrite: {
    "^/demo1/.*": "/demo1/index.html"
  },
  changeOrigin: false
  // headers: {
  //   host: "fashion.sohu.com",
  //   origin: "http://fashion.sohu.com"
  // }
});
const proxyAPI = httpProxyMiddleware(["/api/sohu-fashion/"], {
  target: "http://fashion.sohu.com",
  pathRewrite: {
    "^/api/sohu-fashion/(.*)": "/$1"
  },
  changeOrigin: true,
  headers: {
    host: "fashion.sohu.com",
    origin: "http://fashion.sohu.com"
  }
});

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
  middleware: [proxyHtml, proxyAPI]
});
