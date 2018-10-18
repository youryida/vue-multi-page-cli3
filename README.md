# vue-multi-page-cli3
> build base [vue-cli v3.0.x](https://cli.vuejs.org/zh/)

## 名词解释

- 子项目。我们把该多页应用中的每一个page应用，称为一个子项目。即，该多页应用包含了多个子项目。

## 安装

```
npm install
```

### 开发模式启动本地服务
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

### 代码Lint并自动fix
```
npm run lint
```

### 启动独立本地服务，预览可部署版本
```
npm run serve-dist
```

## Q&A

### 一、开发准备

#### 1. 开发之前要准备哪些工作？
- IDE安装prettier插件，并打开"保存时自动格式化"配置开关，代码风格描述文件设置为当前项目根目录下的`.prettierrc.js`。如果IDE无法读取此处配置，那么请手动同步配置到IDE。

```
注：sublime text3的JsPrettier插件无法读取`.prettierrc.js`，需要手动同步配置到`JsPrettier.sublime-settings`。但是即便如此，截止到20181017，sublime的JsPrettier插件依然无法有效支持对除js外其他文件的格式化，等等一系列问题。坑爹，强烈建议大家放弃sublime。
```

- 全局安装[serve](https://github.com/zeit/serve):`npm install -g serve`，用来启动本地静态服务，预览部署版本效果。相关配置见`/build/serve-dist.json`（已开启history模式）

### 二、代码风格约束

#### 1. 为什么要使用eslint+prettier
- 参考：[梳理前端开发使用eslint和prettier来检查和格式化代码问题](http://web.jobbole.com/94786/),[
使用ESLint+Prettier来统一前端代码风格](https://segmentfault.com/a/1190000015315545)
```
注：为了更早发现代码风格中的问题，IDE需要安装prettier相关插件，参考：(Prettier-Editor Integration)[https://prettier.io/docs/en/editors.html]
```

#### 2. 哪些配置文件会约束代码风格
`.editorconfig`和`.prettierrc.js`。某些约束项上有轻微冲突，我们设置为相同配置就好。

#### 3. 为什么文件保存时的自动格式化使用了IDE插件，而不是node任务？
- 做成node服务，会面临和组员不同IDE不同IDE配置的冲突
- IDE读取项目根目录下的配置文件进行项目级的代码风格自动格式化，已经做的非常好了（比如vs code、sublime text、webstorm等）
- 业界习惯

### 三、配置文件命名约束

#### 1. 为什么不把babel、eslint、prettier等配置放在package.json里？
原理上，项目根目录下独立的配置文件或者package.json里声明都可以。这么做是基于以下考虑：

- package.json执行严格的json格式，不允许添加注释
- 独立配置文件优先级最高（package.json优先级最低），如此便于团队成员快速清晰了解配置约束。
- 以prettier为例，独立配置文件，便于各类IDE读取配置（待考察，猜的）

#### 2. 配置文件命名为什么推荐使用 `.xxrc.js`？
babel、eslint、prettier、postcss等，其配置文件或多或少的支持了多种命名格式，如 `.xxrc/.xxrc.js/.xxrc.json/.xxrc.yaml/xx.config.js`。
上述每种文件命名的格式规范和适用场景有一些细微的区别，从以下几点考虑，我们推荐在插件支持的情况下，优先使用`.xxrc.js`：

- 优先级最高
- Linux类系统中表示为隐藏文件，可以清晰的表达该类文件的只读特征
- 支持添加逻辑控制、补充注释等，以便实现更精细化、更清晰易读的约束控制
- .js文件易于实现文件内code的自动格式化
- 更多的语义化和业界习惯

### 四、接口代理

#### 1. server api的proxy配置为何没有按子项目进行归类？
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
- 对接sever方数量有限
- 各子项目调用的server接口存在较多重合
综合分析，对ProxyTable进行全局配置管理的`方案B`更合适。


## Contact me
- 提交issue
- QQ/weChat : 1140215489
