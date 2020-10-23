<template>
  <div class="list">
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="iconfont item-title-icon">&#xe7e0;</span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    background #fff
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .item-title-icon
    position relative
    left .06rem
    top .04rem
    display inline-block
    width .44rem
    height .4rem
    line-height .4rem
    font-size .4rem
    color $bgColor
  .item-children
    padding 0 .3rem
</style>
