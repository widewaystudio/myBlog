<template>
  <div class="imageLoader-container">
    <img v-if="!shanchu" class="placeHolder" :src="placeholder" alt="">
    <img @load="handle" class="image" :src="src" alt="" :style="{opacity:loadedOpacity,transition:`${duration}ms`}">
  </div>
</template>

<script>
export default {
  name: "index",
  props:{
    src:{
      type:String,
      required:true
    },
    placeholder:{
      type:String,
      required:true
    },
    duration:{
      type:Number,
      default:500
    }
  },
  data(){
    return {
      loaded:false,
      shanchu:false,
    };
  },
  computed:{
    loadedOpacity(){
      return this.loaded ? 1 : 0;
    }
  },
  methods:{
    handle(){
      this.loaded = true;
      setTimeout(()=>{
        this.shanchu = true;
        this.$emit("load");
      },this.duration);
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/style/public.less';
.imageLoader-container{
  width:100%;
  height:100%;
  position:relative;
  overflow:hidden;
  img{
    .self-fill();
    object-fit:cover;
    width:100%;
    height:100%;
  }
  .placeHolder{
    filter:blur(0.5vw);
  }
}

</style>
