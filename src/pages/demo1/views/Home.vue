<template>
  <div class="home">
    <h1>This is an home page</h1>
    <Demo1Title content="这里是一个仅供当前页应用(demo1)使用的组件，我们放在了@/page/demo1/components中"/>
  </div>
</template>
<script>
// @ is an alias to /src
import Demo1Title from "../components/Demo1Title.vue";

export default {
  name: "home",
  components: {
    Demo1Title
  }
};
</script>
