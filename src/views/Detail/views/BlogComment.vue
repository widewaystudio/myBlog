<template>
  <div v-loading="isLoading" class="blogComment-container">
    <BlogC :list="data" @submit="handleSubmit"/>
  </div>
</template>

<script>
import BlogC from '@/BlogComment/';
import fetchData from '@/mixins/fetchData';
import {getComments, postComment} from '@/api/blog';

export default {
  name: "BlogComment",
  mixins: [fetchData({})],
  components: {
    BlogC
  },
  data() {
    return {
      page: 1,
      limit: 10,
      isBottom: false,
    }
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async reloadData() {
      if (!this.data.rows) return;
      this.page++;
      this.isLoading = true;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleSubmit(e) {
      const resp = await postComment({
        blogid: this.$route.params.id,
        nickname: e.info.nickname,
        content: e.info.message
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      e.callback("评论成功");
    },
    loadData(e) {

      let dom = e.target;
      if (dom.scrollHeight - dom.scrollTop - dom.offsetHeight < 200) {
        if (this.isLoading === false && this.data.rows.length < this.data.total) {
          this.isBottom = true;
          this.reloadData();
        }
      }

    }
  },
  mounted() {
    this.bus.$on("mainScroll", this.loadData);
  }

}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

.blogComment-container {
  width: 100%;
  position: relative;
}
</style>
