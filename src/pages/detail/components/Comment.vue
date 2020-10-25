<template>
  <div class="comment-card">
    <div class="comment border-bottom">用户评论</div>
    <div class="comment-list">
      <div class="comment-list-item border-bottom" v-for="(item, index) of commentList" :key="index">
        <div class="comment-star">
          <span v-for="(star, order) of allStar[index]" :key="order">
            <span class="iconfont" :style="star">&#xe602;</span>
          </span>
          <span class="comment-user-date">{{item.author}} &nbsp; {{item.date}}</span>
        </div>
        <div class="comment-content">
          <p class="comment-text">
            {{item.content}}
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
  name: 'DeatilComment',
  props: {
    commentList: Array
  },
  data () {
    return {
      allStar: []
    }
  },
  watch: {
    commentList (newVal, oldVal) {
      const len = newVal.length
      for (var i = 0; i < len; i++) {
        const num = newVal[i].lightStar
        if (num > 0 && num < 5) {
          var star0 = []
          for (var j = 0; j < num; j++) {
            star0.push({ color: '#ffb436' })
          }
          for (var k = num; k < 5; k++) {
            star0.push({ color: '#eee' })
          }
          this.allStar.push(star0)
        } else if (num >= 5) {
          var star1 = []
          for (var x = 0; x < num; x++) {
            star1.push({ color: '#ffb436' })
          }
          this.allStar.push(star1)
        } else {
          var star2 = []
          for (var y = 0; y < num; y++) {
            star2.push({ color: '#eee' })
          }
          this.allStar.push(star2)
        }
      }
      // console.log(this.allStar)
    }
  }
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
