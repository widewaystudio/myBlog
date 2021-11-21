<template>
 <i class="iconfont icon-container" :class="fullClass"></i>
</template>

<script>
const map = {
  ww:"icon-aliwangwang",
  code:"icon-display-code",
  serv:"icon-headset-fill",
  angleDown:"icon-angle-down",
  angleUp:"icon-angle-up",
  info:"icon-info-circle",
  warn:"icon-exclamation-circle",
  close:"icon-times",
  user:"icon-user-circle",
  home:"icon-home",
  email:"icon-mail",
  right:"icon-check-circle",
  error:"icon-times-circle"
}
export const types = Object.keys(map);
export default {
  name: "index",
  props:{
    type:{
      type:String,
      required:true
    }
  },
  computed:{
    fullClass(){
      return map[this.type];
    }
  }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2907818_rzszvs2wbym.css";
.iconfont{
  color:inherit;
  font-size:inherit;
  font-weight:inherit;
}
</style>
