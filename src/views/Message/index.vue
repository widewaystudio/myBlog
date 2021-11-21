<template>
  <div ref="mainScroll" class="message-container">
    <div class="message">
      <h1>留言区</h1>
      <BlogComment v-loading="isLoading" :list="data" @submit="handleSubmit"/>
    </div>
    <GotoTop/>
  </div>
</template>

<script>
import BlogComment from '@/BlogComment/';
import {mapState} from 'vuex';
import Debounce from '@/Utils/Debounce';
import GotoTop from '@/goTop/';

export default {
  name: "index",
  components: {
    BlogComment,
    GotoTop
  },
  computed: {
    ...mapState('Message', ['isLoading', 'data'])
  },
  data() {
    return {
      page: 1,
      limit: 10
    }
  },
  methods: {
    handleSubmit(e) {
      this.$store.dispatch('Message/postMessage', e);
    },

    reloadData() {
      this.$store.dispatch('Message/getMessage', {page: this.page + 1})
    },
    maintop(e) {
      this.bus.$emit("BlogList", e);
      let dom = e.target;
      if (dom.scrollHeight - dom.scrollTop - dom.offsetHeight < 200) {
        if (this.isLoading === false && this.data.rows.length < this.data.total) {
          this.isBottom = true;
          this.reloadData();
        }
      }
    },
  },
  created() {
    this.$store.dispatch('Message/getMessage', {page: this.page, limit: this.limit});
  },
  mounted() {
    this.debounceEvent = Debounce(this.maintop, 100);
    this.$refs.mainScroll.addEventListener("scroll", this.debounceEvent);
  },
  beforeDestroy() {
    this.$refs.mainScroll.removeEventListener("scroll", this.debounceEvent);
  }
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';

.message-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;


  .message {
    width: 1200px;
    padding: 10px 15px;
    box-sizing: border-box;
    min-height: 200px;
    margin: 0 auto;
    position: relative;

  }

}

</style>
