<template>
  <div v-loading="isLoading" class="blogCategory-container">
    <h2>文章列表</h2>
    <List :list="list" @select="selectHandle"/>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';
import {getTypeList} from '@/api/blog';
import List from './lists';

export default {
  name: "BlogCategory",
  components: {
    List
  },
  mixins: [fetchData([])],
  computed: {
    categoryid() {
      return this.$route.params.categoryId || -1;
    },
    list() {
      let c = 0;
      this.data.forEach(i => c += i.articleCount);
      let newA = [{
        name: "全部",
        articleCount: c,
        id: -1
      }, ...this.data];
      newA.map(i => i.isSelect = i.id === this.categoryid);
      return newA;
    }
  },
  methods: {
    async fetchData() {
      return await getTypeList();
    },
    selectHandle(e) {
      this.$router.push({
        name: "CateBlog",
        params: {
          categoryId: e.id
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

.blogCategory-container {
  width: 300px;
  height: 100%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;


}
</style>
