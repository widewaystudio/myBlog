<template>
<div class="test-container">
<Aside></Aside>
</div>
</template>

<script>
import Aside from './';
export default {
  name: "test",
  components:{
    Aside
  }
}
</script>

<style lang="less" scoped>
.test-container{
  width:250px;
  height:800px;
  overflow-x:hidden;
  overflow-y:auto;
  border:1px solid #ddd;
  background-color:#000;
  margin:10px auto;
}
</style>
