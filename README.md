# vue-multi-page-cli3

> build base [vue-cli v3.0.x](https://cli.vuejs.org/zh/)

## 名词解释

- 子项目。我们把该多页应用中的每一个 page 应用，称为一个子项目。即，该多页应用包含了多个子项目。

## 安装

```
npm install
```

### 开发模式启动本地服务

默认对接 server 的 test 环境

```
npm run serve
```

### 构建可供部署版本

```
npm run build
```

### Run your tests

```
npm run test
```

### 代码 Lint 并自动 fix

```
npm run lint
```

### 启动独立本地服务，预览可部署版本

```
npm run serve:dist
```

## Q&A

### 一、开发准备

#### 1. 开发之前要准备哪些工作？

- IDE 安装 prettier 插件，并打开"保存时自动格式化"配置开关，代码风格描述文件设置为当前项目根目录下的`.prettierrc.js`。如果 IDE 无法读取此处配置，那么请手动同步配置到 IDE。

```
注：sublime text3的JsPrettier插件无法读取`.prettierrc.js`，需要手动同步配置到`JsPrettier.sublime-settings`。但是即便如此，截止到20181017，sublime的JsPrettier插件依然无法有效支持对除js外其他文件的格式化，等等一系列问题。坑爹，强烈建议大家放弃sublime。
```

- 全局安装[serve](https://github.com/zeit/serve):`npm install -g serve`，用来启动本地静态服务，预览部署版本效果。相关配置见`/build/serve-dist.json`（已开启 history 模式）

### 二、代码风格约束

#### 1. 为什么要使用 eslint+prettier

- 参考：[梳理前端开发使用 eslint 和 prettier 来检查和格式化代码问题](http://web.jobbole.com/94786/),[
  使用 ESLint+Prettier 来统一前端代码风格](https://segmentfault.com/a/1190000015315545)

```
注：为了更早发现代码风格中的问题，IDE需要安装prettier相关插件，参考：(Prettier-Editor Integration)[https://prettier.io/docs/en/editors.html]
```

#### 2. 哪些配置文件会约束代码风格

`.editorconfig`和`.prettierrc.js`。某些约束项上有轻微冲突，我们设置为相同配置就好。

#### 3. 为什么文件保存时的自动格式化使用了 IDE 插件，而不是 node 任务？

- 做成 node 服务，会面临和组员不同 IDE 不同 IDE 配置的冲突
- IDE 读取项目根目录下的配置文件进行项目级的代码风格自动格式化，已经做的非常好了（比如 vs code、sublime text、webstorm 等）
- 业界习惯

### 三、配置文件命名约束

#### 1. 为什么不把 babel、eslint、prettier 等配置放在 package.json 里？

原理上，项目根目录下独立的配置文件或者 package.json 里声明都可以。这么做是基于以下考虑：

- package.json 执行严格的 json 格式，不允许添加注释
- 独立配置文件优先级最高（package.json 优先级最低），如此便于团队成员快速清晰了解配置约束。
- 以 prettier 为例，独立配置文件，便于各类 IDE 读取配置（待考察，猜的）

#### 2. 配置文件命名为什么推荐使用 `.xxrc.js`？

babel、eslint、prettier、postcss 等，其配置文件或多或少的支持了多种命名格式，如 `.xxrc/.xxrc.js/.xxrc.json/.xxrc.yaml/xx.config.js`。
上述每种文件命名的格式规范和适用场景有一些细微的区别，从以下几点考虑，我们推荐在插件支持的情况下，优先使用`.xxrc.js`：

- 优先级最高
- Linux 类系统中表示为隐藏文件，可以清晰的表达该类文件的只读特征
- 支持添加逻辑控制、补充注释等，以便实现更精细化、更清晰易读的约束控制
- .js 文件易于实现文件内 code 的自动格式化
- 更多的语义化和业界习惯

### 四、接口代理

#### 1. 如何配置接口代理

在`config/proxyTable.config.js`中配置 proxyTable。
相关脚本会读取此处配置用来做本地开发、本地预览可部署版本以及发布上线后的接口代理。

#### 2. 作为一个多页应用，server api 的 proxy 配置为何没有按子项目进行归类？

```
方案A
FE Router：
    fe.com/demo-a/[!api]/** → fe.com/demo-a/index.html
    fe.com/demo-b/[!api]/** → fe.com/demo-b/index.html
Server API：
    fe.com/demo-a/api/1/**/* → server1.com/*
    fe.com/demo-a/api/2/**/* → server2.com/*
    fe.com/demo-b/api/3/**/* → server3.com/*

方案B
FE Router：
    fe.com/demo-a/**/* → fe.com/demo-a/index.html
    fe.com/demo-b/**/* → fe.com/demo-b/index.html
Server API：
    fe.com/api/1/**/* → server1.com/*
    fe.com/api/2/**/* → server2.com/*
```

对比以上两个方案，以及实际业务中的场景特点：

- 对接 sever 方数量有限
- 各子项目调用的 server 接口存在较多重合
  综合分析，对 proxyTable 进行全局配置管理的`方案B`更合适。

#### 2. 对可部署版本进行本地预览时，Server api proxy 如何配置？

### 五、构建

#### 1. 可部署版本的本地预览使用了哪些插件？

构建成功后，可以通过启动静态服务[browser-sync](https://github.com/BrowserSync/browser-sync)，实现对`dist`目录下可部署版本的本地预览访问。其中，server api proxy 使用了[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)

注：没有使用 vue-cli3 官方文档中推荐的 [serve](https://github.com/zeit/serve)，是因为它内部使用的接口代理中间件无法满足 server api 代理到其他远程服务的需求。

## Contact me

- 提交 issue
- QQ/weChat : 1140215489
