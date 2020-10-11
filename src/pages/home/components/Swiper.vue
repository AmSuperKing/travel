<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOptions: {
        // 参数选项,显示小点
        pagination: '.swiper-pagination',
        // 循环
        loop: true,
        // 每张播放时长3秒，自动播放
        autoplay: 2000,
        // 滑动速度
        speed: 1000
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg'
      }]
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
