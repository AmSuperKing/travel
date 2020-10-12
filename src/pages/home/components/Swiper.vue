<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls,显示小点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        // 参数选项,显示小点
        pagination: '.swiper-pagination',
        // 循环
        loop: true,
        // 每张播放时长3秒，自动播放
        autoplay: 3000,
        // 滑动速度
        speed: 1000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  // >>>穿透作用，因为swiper-pagination-bullet-active类在组件内部定义的，想要wrapper也能作用到，可以用>>>
  .wrapper >>>.swiper-pagination-bullet-active
    background #fff !important
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 36.64%
    background #eee
    .swiper-img
      width 100%
</style>
