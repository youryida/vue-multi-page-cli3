<template>
  <div class="home">
    <h1>This is an home page</h1>
    <Demo1Title content="这里是一个仅供当前页应用(demo1)使用的组件，我们放在了@/page/demo1/components中"/>
    <hr>
    <h4>demo - fetchList by server api proxy：</h4>
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
      fetch("/sohu-fashion/upload/xiaohua2018wjy/data-ad-star.json")
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
  font-size: 12px;
}
</style>
