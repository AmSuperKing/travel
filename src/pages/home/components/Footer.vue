<template>
  <div class="footer">
    <div class="foot-more">
      <ul class="foot-more-list">
        <li>
          <a href="#" class="flight">
            <div class="iconfont icon">&#xe62a;</div>
            <span>机票</span>
          </a>
        </li>
        <li>
          <a href="#" class="flight">
            <div class="iconfont icon">&#xe65d;</div>
            <span>酒店</span>
          </a>
        </li>
        <li>
          <a href="#" class="flight">
            <div class="iconfont icon">&#xe662;</div>
            <span>公寓</span>
          </a>
        </li>
        <li>
          <a href="#" class="flight">
            <div class="iconfont icon">&#xe635;</div>
            <span>更多</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="foot-copyright">
     <span>Travel &copy;京ICP备05052679</span>
     <a href="#">意见反馈</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .footer
    background #eeeeee
    .foot-more
      display block
      width 100%
      height 0
      padding-bottom 1rem
      text-align center
      .foot-more-list
        list-style-type none
        padding-top .2rem
        overflow hidden
        width 100%
        .flight
          color $bgColor
          .icon
            display inline
            line-height .5rem
            font-size .4rem
      .foot-more-list>li
        list-style none
        float left
        text-align center
        margin 0 auto
        width 25%
        height .5rem
        line-height .5rem
        position relative
        background none
      .foot-more-list span
        border-bottom 1px solid #acacac
      .foot-more-list li:last-child div
        border-left 1px solid #acacac
        padding-left .1rem
      .foot-more-list li:last-child span
        border-bottom none
    .foot-copyright
      border-top .02rem solid #acacac
      padding 0.2rem
      color #9e9e9e
      text-align center
    .foot-copyright a
      color $bgColor
</style>
