/**
 * 暂简化为，只匹配host后面以下面key开头的path，代理到value所指向的远程host
 * 待优化 感觉处理成左边正则 右边动态匹配的会更强大一些
 */
let proxyTable = {
  test: {
    "/api/sohu-fashion/": "fashion.sohu.com"
  },
  prod: {
    "/api/sohu-fashion/": "fashion.sohu.com"
  }
};

module.exports = proxyTable;
