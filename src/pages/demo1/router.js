import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  base: "demo1", //   这里试试能不能搞成动态读取文件夹name 自动赋值
  routes: [
    {
      path: "/home",
      alias: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
