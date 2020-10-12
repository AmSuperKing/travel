<template>
  <div>
    <div class="weekend-rec-title">周末去哪玩啊</div>
    <ul>
      <li class="week-item border-bottom" v-for="item of weekRecList" :key="item.id">
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
  data () {
    return {
      weekRecList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/e1/28d418ecf6e535.jpg_r_640x214_77e18cdc.jpg',
        title: '情侣约会圣地',
        desc: '你听，鸟语！你闻，花香！你听，海浪。你看，我的对面，是你……'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/5e/6e13db8af6ec30.jpg_r_640x214_5c1b0fa9.jpg',
        title: '三亚必打卡',
        desc: '玩转海岛热带雨林，感受独特黎苗文化'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/6c/6164a2839e72b6.jpg_r_640x214_ce94d0d0.jpg',
        title: '发现不一样的三亚',
        desc: '你的眼睛欺骗了你的心，千万别错过'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/3e/a588a413145dbe.jpg_r_640x214_b3729b6e.jpg',
        title: '小清新帆船出海',
        desc: '完整体验驾驶帆船出海的乐趣，感受不一样的海上休闲，体验无限驰骋的空间'
      }]
    }
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
    padding-bottom 33.9%
    .week-item-img
      width 100%
  .week-item-info
    padding .2rem
    .week-item-info-title
      line-height .54rem
      font-size .28rem
      padding 0 1.4rem 0 0
      ellipsis()
    .week-item-info-desc
      line-height .4rem
      color #cccccc
      font-size .24rem
      padding 0 1.4rem 0 0
      ellipsis()
</style>
