<template>
  <div class="about">
    <img alt="Vue logo" src="@/assets/logo.png">
    <h1>This is an about page</h1>
    <hr>
    <h3>1. Demo - 全局组件（多页应用共用）</h3>
    <p>
      <HelloWorld msg="这里是一个多页应用共用的组件，我们放在了@/components中"/>
    </p>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "about",
  components: {
    HelloWorld
  }
};
</script>
<style lang="scss" scoped>
p {
  font-size: 14px;
}
</style>
