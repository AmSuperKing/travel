<template>
  <div>
    <div class="recommend-title">
      <span class="iconfont rec-hot">&#xe62c;</span>热门推荐
    </div>
    <ul>
      <li class="rec-item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/2006/cc/ccdbfaf89d7d56b4a3.img.jpg_200x200_747b0b78.jpg',
        title: '三亚千古情景区',
        desc: '置身传统黎村，领略黎族风情'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/10/10d6568ad3ad4bb5a3.img.jpg_200x200_c6c1ed20.jpg',
        title: '亚龙湾热带天堂森林公园',
        desc: '您身边的天然森林氧吧'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/2f/2f9b29981c3c9f85a3.img.jpg_200x200_9d91fda5.jpg',
        title: '蜈支洲岛',
        desc: '带上心爱的人来浪漫情人岛吧~'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_200x200_84bd8f96.jpg',
        title: '南山文化旅游区',
        desc: '三亚本月收藏Top5╰(￣▽￣)╭'
      }]
    }
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
