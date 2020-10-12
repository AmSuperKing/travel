<template>
  <div>
    <div class="weekend-rec-title">周末去哪玩啊</div>
    <ul>
      <li class="week-item border-bottom" v-for="item of list" :key="item.id">
        <div class="week-item-img-wrapper">
          <img class="week-item-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="week-item-info">
          <p class="week-item-info-title">{{item.title}}</p>
          <p class="week-item-info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .weekend-rec-title
    line-height .8rem
    background #eeeeee
    text-indent .2rem
  .week-item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .week-item-img
      width 100%
  .week-item-info
    padding .2rem
    .week-item-info-title
      line-height .54rem
      color #212121
      font-size .28rem
      padding 0 1.4rem 0 0
      ellipsis()
    .week-item-info-desc
      line-height .4rem
      color #616161
      font-size .24rem
      padding 0 1.4rem 0 0
      ellipsis()
</style>
