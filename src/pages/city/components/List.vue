<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <!-- 循环输出热门城市 -->
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 循环输出字母 -->
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <!-- 循环输出每个字母时循环输出每个拼音字母开头的城市 -->
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.key" @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCityClick (city) {
      // alert(city)
      // this.$store.dispatch('changeCity', city)
      // 没有异步操作或不是批量数据操作，操作简单，直接调用commit,跳过dispatch
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/') // 编程式导航
    }
  },
  watch: {
    letter () {
      // console.log(this.letter)
      // 使用BetterScroll提供的接口
      if (this.letter) {
        // 当this.letter不为空时调用此方法，可以让BetterScroll自动滚动到某个元素上
        // this.$refs[this.letter]得到的是一个数组，不是标准的DOM元素
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element) // 这个函数传入用到的必须是一个DOM元素或选择器
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
  .border-bottom
    &:before
      border-color #cccccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eeeeee
      padding-left .2rem
      color #666666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #cccccc
          border-radius .06rem
    .item-list
      .item
        line-height .66rem
        padding-left .2rem
</style>
