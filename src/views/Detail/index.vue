<template>
  <div v-loading="isLoading" class="detail-container">
    <Layout>
      <template>
        <div ref="mainbox" class="detail">
          <Detail v-if="data" ref="details" :list="data"/>
          <Comment v-if="!isLoading"/>
        </div>
      </template>
      <template #right>
        <Toc :items="data.toc"/>
      </template>
    </Layout>
    <GoTop/>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import Detail from './views/BlogDetail';
import Comment from './views/BlogComment';
import GoTop from '@/goTop/';
import Toc from './views/BlogToc';
import {mapState} from 'vuex';


export default {
  name: "index",
  components: {
    Layout,
    Detail,
    Comment,
    Toc,
    GoTop
  },
  computed: mapState('Details', ['isLoading', 'data']),
  methods: {
    maintop(e) {
      this.bus.$emit("mainScroll", e);
    },
  },
  mounted() {
    this.$refs.mainbox.addEventListener('scroll', this.maintop);
  },
  created() {
    this.$store.dispatch('Details/asyncData', this.$route.params.id)
  },
  updated() {
    let oldHash = location.hash;
    location.hash = '';
    setTimeout(() => {
      location.hash = oldHash;
    }, 100);

  },
  beforeDestroy() {
    this.$refs.mainbox.removeEventListener('scroll', this.maintop);
  }
}
</script>

<style lang="less" scoped>
.detail-container {
  width: 100%;
  height: 100%;
  position: relative;

  .detail {
    height: 100%;
    overflow-y: auto;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    scroll-behavior: smooth;
    position: relative;
  }
}
</style>
