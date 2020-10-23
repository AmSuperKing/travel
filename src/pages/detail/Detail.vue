<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div>
      <detail-base></detail-base>
      <div class="ticket-title">景区门票</div>
      <detail-list :list="list"></detail-list>
    </div>
    <detail-comment></detail-comment>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailBase from './components/Base'
import DetailComment from './components/Comment'
import DetailFooter from 'common/footer/Footer'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailBase,
    DetailList,
    DetailComment,
    DetailFooter
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票 - 某连锁店销售'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '儿童票'
      }, {
        title: '学生票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .detail
    background #eee
  .ticket-title
    width 100%
    height .4rem
    line-height .4rem
    padding .2rem 0 .2rem .2rem
    font-size .36rem
    font-weight bold
    background #fff
</style>
