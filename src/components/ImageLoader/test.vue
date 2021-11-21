<template>
<div class="test-container">
<ImageLoader src="http://img3.doubanio.com/pview/event_poster/raw/public/3f1899713dddd81.jpg" placeholder="https://img1.baidu.com/it/u=2784893638,543044592&fm=26&fmt=auto" @load="handleLoaded" :duration="2000"></ImageLoader>
</div>
</template>

<script>
import ImageLoader from './'
export default {
  name: "test",
  components:{
    ImageLoader
  },
  methods:{
    handleLoaded(){
      console.log("图片加载完成")
    }
  }
}
</script>

<style lang="less" scoped>
.test-container{
  width:600px;
  height:600px;
  overflow:hidden;
}
</style>
