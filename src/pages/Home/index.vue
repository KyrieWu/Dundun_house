<template>
  <typeNav />
  <ListContainer />
  <Recommend />
  <Rank />
  <Like />
  <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
  <Brand />
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "HomeItem",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  setup() {
    let store = useStore();
    store.dispatch("getFloorList");

    let floorList = computed(() => store.state.home.floorList);

    return {
      floorList,
    };
  },
};
</script>

<style>
</style>