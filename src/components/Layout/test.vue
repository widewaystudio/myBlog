<template>
<div class="test-container">
  <Layout>
    <template #left>
      <div class="left">
        我是左边栏
      </div>
    </template>
    <template #default>
      <div class="main">
        我是中间区域
      </div>
    </template>
  </Layout>

</div>
</template>

<script>
import Layout from './';
import '@/style/global.less'
export default {
  name: "test",
  components:{
    Layout
  }
}
</script>

<style lang="less" scoped>
.test-container{
  width:100%;
  height:100%;
  border:1px solid #ddd;
  .left{
    width:250px;
    height:100%;
    background-color:green;
  }
  .main{
  width:100%;
  height:100%;
    background-color:red;
  }
.right{
  width:150px;
  height:100%;
  background-color:yellow;
}
}
</style>
