<template>
  <div class="base-info">
    <div class="row">
      <div class="base-info-left">
        <div>
          <span class="comment-score">{{this.baseInfo.numEvaluation}}</span>
          <span class="comment-text">分</span>
          <span class="comment-desc">{{this.baseInfo.textEvaluation}}</span>
          <span class="iconfont to-comment-icon">&#xe64a;</span>
        </div>
        <div>
          <span class="total-comment-num">{{this.baseInfo.totalComments}}条评论</span>
          <span class="total-strategy-num">{{this.baseInfo.totalStrategy}}条攻略</span>
        </div>
      </div>
      <div class="base-info-right">
        <div>
          <span class="introduce-title">景点简介</span>
        </div>
        <div>
          <span class="introduce-tips">开放时间、贴士</span>
          <span class="iconfont to-tips-icon">&#xe64a;</span>
        </div>
      </div>
    </div>
    <div class="row base-info-loc">
      <div class="iconfont loc-icon">&#xe603;</div>
      <p class="loc-text">{{this.baseInfo.loc}}</p>
      <span class="iconfont loc-to-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInfo',
  props: {
    baseInfo: Object
  }
}
</script>

<style lang="stylus" scoped>
  .row
    flex-basis 100%
    display flex
    padding-bottom .2rem
  .base-info
    display flex
    flex-wrap: wrap;
    width 100%
    box-sizing border-box
    padding .1rem .2rem
    margin-bottom .4rem
    background #fff
    .base-info-left
      position relative
      width 50%
      padding .1rem
      border-right .02rem solid #eee
      .comment-score
        font-size .44rem
        color #ff8300
        line-height .44rem
      .comment-text
        font-size .28rem
        color #ff8300
        line-height .48rem
      .comment-desc
        font-size .28rem
        color #ff8300
        line-height .48rem
        margin-left .2rem
      .to-comment-icon
        position absolute
        top .32rem
        right .1rem
        color #9e9e9e
        font-size .28rem
      .total-comment-num
        font-size .24rem
        color #9e9e9e
        line-height .32rem
        margin-right .1rem
      .total-strategy-num
        font-size .24rem
        color #9e9e9e
        line-height .32rem
        margin-right .2rem
    .base-info-right
      position relative
      width 50%
      padding .1rem .1rem .1rem .12rem
      .introduce-title
        font-size .28rem
        color #212121
        line-height .48rem
        padding-left .3rem
      .introduce-tips
        color #9e9e9e
        font-size .24rem
        padding-left .3rem
      .to-tips-icon
        position absolute
        top .32rem
        right .1rem
        color #9e9e9e
        font-size .28rem
  .base-info-loc
    position relative
    padding .2rem 0
    line-height .36rem
    border-top .02rem solid #eee
    color #212121
    .loc-icon
      height: 100%;
      line-height: 100%;
      padding-top .2rem
      color: #9e9e9e;
      font-size: .36rem;
    .loc-text
      padding 0 .2rem
      margin-right .2rem
    .loc-to-icon
      position absolute
      top .32rem
      right .1rem
      color #9e9e9e
      font-size .28rem
</style>
