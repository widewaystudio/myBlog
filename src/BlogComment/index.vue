<template>
  <div class="blog-comment-container">
    <formBlog v-on="$listeners"/>
    <BlogComment :list="list"/>
  </div>
</template>

<script>

import formBlog from "@/BlogComment/formblog";
import BlogComment from "@/BlogComment/blogComment";

export default {
  name: "index",
  components: {
    formBlog,
    BlogComment
  },
  props: {
    list: {
      type: Object,
      default: () => {
      }
    }
  }

}
</script>

<style lang="less" scoped>
.blog-comment-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>
