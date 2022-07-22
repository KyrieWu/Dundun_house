<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-show="isShow" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRoute } from "vue-router";
export default {
  name: "App",
  components: { Header, Footer },
  setup() {
    let route = useRoute();
    let isShow = function () {
      return route.meta.show;
    };

    return {
      isShow,
    };
  },
};
</script>

<style>
</style>
