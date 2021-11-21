<template>
  <div class="container">
    <Avatar  url="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF"  :size="220"></Avatar>
  </div>

</template>

<script>
import Avatar from './'
export default {
  name: "test",
  components:{
    Avatar
  }
}
</script>

<style scoped>
.container{
  width:300px;
  height:300px;
  border-radius:20px;
  background-color:#888;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:center;

}
.avatar-container{
  border:5px solid rgba(255,255,255,0.8);
}
</style>
