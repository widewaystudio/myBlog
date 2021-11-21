<template>
 <div class="container">
   <Empty text="真的没有数据"></Empty>
 </div>
</template>

<script>
import Empty from './'
export default {
  name: "test",
  components:{
    Empty
  }
}
</script>

<style scoped>
.container{
  position:relative;
  width:600px;
  height:300px;
  border:1px solid #ddd;
}


</style>
