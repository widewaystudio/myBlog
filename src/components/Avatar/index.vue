<template>
  <img :src="url" :style="{width:size+'px',height:size+'px'}" alt="" class="avatar-container">
</template>

<script>
export default {
  name: "index",
  props:{
    url:{
      type:String,
      required:true
    },
    size:{
      type:Number,
      default:100
    }
  }
}
</script>

<style scoped>
.avatar-container{
  border-radius:50%;
  display:block;
  object-fit:cover;
  background-color:transparent;
  overflow:hidden;

}
</style>
