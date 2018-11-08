import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  base: location.pathname.split("/")[1], //这里设置为一级path，后面应该抽离到项目配置文件中
  routes: [
    {
      path: "(/|/index.html)",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    }
  ]
});
