<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { ref, watch, nextTick, getCurrentInstance } from "@vue/runtime-core";
export default {
  name: "Carousel",
  props: ["list"],
  setup(props) {
    const { ctx } = getCurrentInstance();
    watch(
      () => props.list,
      () => {
        nextTick(() => {
          new Swiper(ctx.$refs.cur, {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
      { immediate: true }
    );
  },
};
</script>

<style>
</style>


