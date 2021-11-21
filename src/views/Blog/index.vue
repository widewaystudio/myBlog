<template>
  <div class="blog-container">
    <Layout>
      <template class="blogList">
        <BlogList></BlogList>
      </template>
      <template #right>
        <BlogCategory></BlogCategory>
      </template>
    </Layout>
  </div>

</template>

<script>
import Layout from '@/components/Layout';
import BlogList from './components/BlogList';
import BlogCategory from "./components/BlogCategory";


export default {
  name: "Blog",
  components: {
    Layout,
    BlogList,
    BlogCategory
  }
}
</script>

<style lang="less" scoped>
.blog-container {
  width: 100%;
  height: 100%;

  .blogList {
    width: 100%;
    height: 100%;
    position: relative;
  }
}

</style>
