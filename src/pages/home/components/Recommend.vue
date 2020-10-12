<template>
  <div>
    <div class="recommend-title">
      <span class="iconfont rec-hot">&#xe62c;</span>热门推荐
    </div>
    <ul>
      <li class="rec-item border-bottom" v-for="item of list" :key="item.id">
        <img class="rec-item-img" :src="item.imgUrl" :alt="item.title">
        <div class="rec-item-info">
          <p class="rec-item-info-title">{{item.title}}</p>
          <p class="rec-item-info-desc">{{item.desc}}</p>
          <button class="rec-item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .recommend-title
    line-height .8rem
    background #eeeeee
    text-indent .2rem
    .rec-hot
      color red
      font-size .3rem
      margin 0 .08rem
  .rec-item
    overflow hidden
    display flex
    height 1.9rem
    .rec-item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .rec-item-info
      flex 1
      padding .1rem
      min-width 0
      .rec-item-info-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .rec-item-info-desc
          line-height .4rem
          color #cccccc
          ellipsis()
      .rec-item-button
        line-height .38rem
        background $bgColor
        margin-top .16rem
        padding 0 .2rem
        padding-bottom .02rem
        border-radius .06rem
        font-size .22rem
        text-align center
        color #ffffff
</style>
