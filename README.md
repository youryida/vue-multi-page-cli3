# vue-multi-page-cli3

## Project setup
> build base vue-cli v3.0.4

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### 本地预览部署版本
```
npm run serve-dist
```

## Q&A

#### 1. 开发之前要准备哪些工作？

- IDE安装prettier插件，并打开"保存时自动格式化"配置开关，代码风格描述文件设置为当前项目根目录下的`prettier.config.js`。如果IDE无法读取此处配置，那么请手动同步配置到IDE。（如，sublime text3的JsPrettier插件无法读取，需要手动同步配置到`JsPrettier.sublime-settings`）
- 全局安装[serve](https://github.com/zeit/serve):`npm install -g serve`，用来启动本地静态服务，预览部署版本效果。相关配置见`/serve.json`（已开启history模式）

#### 2. 为什么要使用eslint+prettier

http://web.jobbole.com/94786/,https://segmentfault.com/a/1190000015315545
> 注：为了更早发现代码风格中的问题，IDE需要安装prettier相关插件，参考：https://prettier.io/docs/en/editors.html 

#### 3. 哪些配置文件会约束代码风格

`.editorconfig`和`prettier.config.js`

#### 4. 为什么不把babel、eslint、prettier等配置放在package.json里？

原理上，项目根目录下独立的配置文件或者package.json里声明都可以。这么做是基于以下考虑：

- package.json执行严格的json格式，不允许添加注释
- 独立配置文件优先级最高（package.json优先级最低），如此便于团队成员快速清晰了解配置约束。
- 以prettier为例，独立配置文件，便于各类IDE读取配置（待考察，猜的）

#### 5. 配置文件命名为什么推荐使用 `xx.config.js`？

babel、eslint、prettier等，其配置文件或多或少的支持了多种命名格式，如 .xxrc/.xxrc.js/.xxrc.json/.xxrc.yaml/xx.config.js。上述每种文件命名的格式规范和适用场景有一些细微的区别，从以下几点考虑，我们推荐在插件支持的情况下，优先使用`xx.config.js`：

- 适用于项目级约束（非文件级，如babel）
- .js文件便于添加逻辑控制、补充注释，以及文件内code的格式化
- 更多的语义化和业界习惯

> 个别不支持xx.config.js形式的插件，我们使用优先级最高的文件命名，如如eslint的.eslint.js


## 待解决的问题
- eslint+prettier的保存监听自动格式化（目前先用IDE解决了）
