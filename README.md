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


## Q&A

- 为什么把eslint、prettier等配置项放在了独立的配置文件中，而不是放在package.json里
```
原理上，配置文件或者package.json都可以。这么做是基于以下考虑：
- package.json执行严格的json格式，不允许添加注释
- package.json中的配置优先级最低，独立配置文件优先级最高，如此便于团队成员快速清晰了解配置约束。
- 以prettier为例，独立配置文件，便于各类IDE读取配置（待考察，猜的）
```

- 为什么要使用eslint+prettier
http://web.jobbole.com/94786/,https://segmentfault.com/a/1190000015315545

注：为了更早发现代码风格中的问题，IDE需要安装prettier相关插件，参考：https://prettier.io/docs/en/editors.html 


## 待解决的问题
- eslint+prettier的保存监听自动格式化（目前先用IDE解决了）
