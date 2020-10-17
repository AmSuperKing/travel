<template>
  <ul class="list">
    <li
      class="item" v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false, // 标识位
      startY: 0,
      timer: null
    }
  },
  // 当页面数据被更新的时候，同时页面完成了自己的渲染之后执行此钩子
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    // 手指触摸滑动开始时设置标识为true
    handleTouchStart () {
      this.touchStatus = true
    },
    // 处理滑动，右侧手指滑动的字母位置，左侧滚动到对应位置
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 获取A字母到整个城市信息div顶部的距离
        // const startY = this.$refs['A'][0].offsetTop ,这个值是固定的
        // 为提高性能，startY计算放到页面渲染完成后的updated生命周期函数
        // console.log(startY)
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 当鼠标来回滑动时Move执行频率较高，设置函数节流，限制减少handleTouchMove的执行频率，提高网页性能
        // 当正在执行滚动事件时，16ms内又继续进行了滑动，把上一次执行的清除掉，执行本次的操作
        this.timer = setTimeout(() => {
          // 获取滑动的字母位置到整个城市信息div顶部的距离，79是城市页标题和输入框高度之和
          const touchY = e.touches[0].clientY - 79
          // console.log(touchY)
          // 计算滑动到的字母位置的索引，20是每个字母元素占的高度
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    // 手指触摸滑动结束时设置标识为false
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
