<template>
  <div class="comment-card">
    <div class="comment border-bottom">用户评论</div>
    <div class="comment-list">
      <div class="comment-list-item border-bottom">
        <div class="comment-star">
          <span class="iconfont star-light">&#xe602;&#xe602;&#xe602;</span>
          <span class="iconfont star-gray">&#xe602;&#xe602;</span>
          <span class="comment-user-date">m*t &nbsp; 2020-01-21</span>
        </div>
        <div class="comment-content">
          <p class="comment-text">
            傍晚临时决定去看演出的，从亚龙湾出发也就半小时左右到。
            因为不清楚附近餐饮所以直接进景区解决了。里面的美食广场不便宜，不过种类多价格业还可以接受。
            简单吃过晚饭后就随便溜达了下进剧场了。三亚千古情演出就内容而言没有特别出彩之处，简单的历史和传说再现，但舞台效果和演员确实不错。
            演出现场不是不少垃圾留下的，希望国人素质越来越好吧。。。唯一遗憾就是没来得及欣赏景区，所以这280性价比比较低🤣建议最好用1-2小时体验一下穿越感呢。
          </p>
        </div>
      </div>
      <div class="comment-list-item border-bottom">
        <div class="comment-star">
          <span class="iconfont star-light">&#xe602;&#xe602;&#xe602;&#xe602;&#xe602;</span>
          <span class="comment-user-date">妈*阳 &nbsp; 2019-05-23</span>
        </div>
        <div class="comment-content">
          <p class="comment-text">
            千古情景区不大，彩色动物园很小，动物很少，有几只土拨鼠超级可爱(๑• . •๑)最具备价值的便是演出吧！
            参演了《大地震》，作为汶川大地震的亲历者，我是从头到尾含着泪😭千古情值得一看，场面很震撼！
            景区内还有很多程府招亲～锅庄～快闪等表演活动，还是挺好玩的！景区有小吃街，倒是有点贵。整个预计三个小时合适！
          </p>
        </div>
      </div>
    </div>
    <div class="look-all">
      <div class="look-all-text">
        查看全部点评
        <div class="down-icon">
          <span class="iconfont">&#xe64a;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeatilComment'
}
</script>

<style lang="stylus" scoped>
  .star-light
    color #ffb436
  .star-gray
    color #eee
  .comment-user-date
    float right
    color #9e9e9e
  .comment-card
    background #fff
    margin-bottom .2rem
  .comment
    width 100%
    height .4rem
    line-height .4rem
    padding .2rem 0 .2rem .2rem
    background #fff
    margin-top .4rem
    font-size .36rem
    font-weight bold
  .comment-list
    padding .1rem .2rem .3rem .2rem
    .comment-list-item
      padding .2rem
      line-height: .32rem;
      font-size: .26rem;
      color: #616161;
      .comment-star
        padding-bottom .1rem
      .comment-content
        .comment-text
          text-align justify
  .look-all
    line-height 1rem
    text-align center
    .look-all-text
      color #616161
      .down-icon
        display inline-block
        transform rotate(90deg)
      .down-icon > span
        font-size .28rem
</style>
