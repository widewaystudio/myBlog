<template>
 <div class="container">
   <div class="item" v-for="t in types" :key="t">
     <Icon :type="t"></Icon>
     <label> {{t}} </label>
   </div>
 </div>
</template>

<script>
import Icon, { types } from './'
export default {
  name: "test",
  components:{
    Icon
  },
  data(){
    return {
      types,
    }
  }
}
</script>

<style scoped>
.container{
  display:flex;
  justify-content:center;
  margin:30px auto;
  width:580px;
  flex-wrap:wrap;
}
.item{
  margin:1em;
  font-size:22px;
  color:#666;
}
</style>
