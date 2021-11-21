<template>
<div class="test-container">
  <Menu :list="lists" />
</div>
</template>

<script>
import Menu from './index';
import "@/style/global.less";
export default {
  name: "test",
  components:{
    Menu
  },
  data(){
    return {
      lists:[
        {icon:"home",link:'/',text:'首页'},
        {icon:"home",link:'/article',text:'文章'},
        {icon:"home",link:'/blog',text:'博客'},
        {icon:"home",link:'/message',text:'留言'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.test-container{
  width:300px;
  height:500px;
  margin:10px auto;
  border:1px solid #ddd;
  background-color:#000;
}
</style>
