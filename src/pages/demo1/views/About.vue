<template>
  <div class="about">
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <h1> This is an about page</h1>
    <HelloWorld msg="这里是一个多页应用共用的组件，我们放在了@/components中" />
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
