<template>
  <div v-if="list.category" class="blogDetail-container">
    <h1>{{ list.title }}</h1>
    <div class="aside">
      <RouterLink :to="{
        name:'CateBlog',
        params:{
          categoryId:list.category.id
        }
      }"><span>{{ cataName }}</span></RouterLink>
      <span>创建时间:{{ Time(list.createDate) }}</span>
      <span>阅读:{{ list.scanNumber }}</span>
      <span @click="hashHandle">评论:{{ list.commentNumber }}</span>
    </div>
    <div v-html="list.htmlContent"></div>
  </div>
</template>

<script>
import Time from '@/api/formatTime';

export default {
  name: "BlogDetail",
  props: {
    list: []
  },
  methods: {
    Time,
    hashHandle() {
      window.location.hash = "comment";
    }
  },
  computed: {
    cataName() {
      return this.list.category ? this.list.category.name : '';
    }
  }
}
</script>

<style lang="less" scoped>
.blogDetail-container {
  width: 100%;
  min-height: 300px;

  .aside {
    span {
      margin-left: 10px;
      color: #ddd;
      cursor: pointer;
    }
  }
}
</style>
