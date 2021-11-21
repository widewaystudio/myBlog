<template>
  <div class="test-container">
    <formBlog v-on="$listeners"/>
    <BlogComment/>
  </div>
</template>

<script>
import formBlog from './formblog';
import BlogComment from './blogComment';

export default {
  name: "blog",
  components: {
    formBlog,
    BlogComment
  }
}
</script>

<style lang="less">
html {
  height: 100%;
}

body {
  height: 100%;
  padding: 0;
  margin: 0;
}


.test-container {
  box-sizing: border-box;
  width: 800px;
  height: 100%;
  border: 1px solid #ddd;
  overflow: hidden;
  padding: 20px;
}
</style>
