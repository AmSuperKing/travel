<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        loop: false
      },
      iconList: [{
        id: '001',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png',
        desc: '景点门票'
      }, {
        id: '002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
        desc: '一日游'
      }, {
        id: '003',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/931f626a44f714d055f9a0f8235170fa.png',
        desc: '海滨海岛'
      }, {
        id: '004',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/59bc59a3c38261e9a3f2f991a9ce0d21.png',
        desc: '三亚必游'
      }, {
        id: '005',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/ace59857fe268552aa556189953aa369.png',
        desc: '三亚呀诺达'
      }, {
        id: '006',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/50e2841850ed7891d9bcb676f5ee9c54.png',
        desc: '亲子乐园'
      }, {
        id: '007',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/9153c8339087095676da59ffadca644e.png',
        desc: '精彩演出'
      }, {
        id: '008',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '快艇出海'
      }, {
        id: '009',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/31b9a56fab64662b16159f5f76d96821.png',
        desc: '天涯海角'
      }, {
        id: '010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
        desc: '蜈支洲岛'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    width 100%
    height 0
    padding-bottom 50%
  .icon
    position relative
    float left
    overflow hidden
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .3rem
      box-sizing border-box
      padding-top .2rem
      padding-bottom 0
      .icon-img-content
        display block
        margin 0 auto
        height 80%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom -.1rem
      height .38rem
      line-height .38rem
      padding  0 .08rem
      text-align center
      color $darkTextColor
      ellipsis()
  .swiper-pagination
    position absolute
    left 0
    right 0
</style>
