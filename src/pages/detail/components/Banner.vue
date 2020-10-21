<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/2006/cc/ccdbfaf89d7d56b4a3.img.jpg_350x240_210000f7.jpg" />
      <div class="banner-info">
        <div class="banner-title">三亚千古情</div>
        <div class="banner-img-number">
          <span class="iconfont banner-icon">&#xe601;</span>
          22
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/2006/cc/ccdbfaf89d7d56b4a3.img.jpg_350x240_210000f7.jpg',
        'http://img1.qunarzz.com/sight/p0/2006/42/421ef9e17c21e766a3.img.jpg_350x240_fe269737.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-img-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0, 0, 0, 0.7)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
