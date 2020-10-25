<template>
  <div class="detail">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div>
      <detail-base :baseInfo="baseInfo"></detail-base>
      <div class="ticket-title">景区门票</div>
      <detail-list :list="list"></detail-list>
    </div>
    <detail-comment :commentList="commentList"></detail-comment>
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
import axios from 'axios'
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
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      baseInfo: {},
      list: [],
      commentList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('api/detail.json?id=', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.baseInfo = data.baseInfo
        this.list = data.categoryList
        this.commentList = data.commentList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
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
