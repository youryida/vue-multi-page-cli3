<template>
  <div class="home">
    <img alt="Vue logo" src="@/pages/demo1/assets/logo.svg">
    <h1>This is an home page</h1>
    <hr>
    <h3>1. Demo - 局部组件（当前页应用内）</h3>
    <p>
      <Demo1Title content="这里是一个仅供当前页应用(demo1)使用的组件，文件目录：@/pages/demo1/components中"/>
    </p>
    <hr>
    <h3>2. Demo - server API 代理</h3>
    <p>拉取展现远程server数据，解决跨域访问问题</p>
    <p>{{list}}</p>
  </div>
</template>
<script>
// @ is an alias to /src
import Demo1Title from "../components/Demo1Title.vue";

export default {
  name: "home",
  components: {
    Demo1Title
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    fetchList() {
      fetch("/api/sohu-fashion/upload/xiaohua2018wjy/data-ad-star.json")
        .then(res => res.json())
        .then(data => {
          this.list = data;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
p {
  font-size: 14px;
}
</style>
