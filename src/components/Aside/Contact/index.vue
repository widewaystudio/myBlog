<template>
<div class="contact-container">
   <ul>
     <li v-for="(n,i) in lists" @mouseover="handle(i)"  @mouseout="handle()" :key="i"><a :href="n.link" >
       <div class="icon">
         <Icon :type="n.icon" />
       </div>
       <span>{{ n.content }}</span>
       <div class="show" v-if="n.show" :style="{transform:diaoyong(flg === i)}">
         <img :src="n.url" alt="">
       </div>
     </a>
     </li>
   </ul>
</div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: "index",
  components:{
    Icon
  },
  props:{
    lists:{
      type:Array
    }
  },
  data(){
    return {
      flg:{
        type:Number
      }
    }
  },
  methods:{
    handle(i){
      i=== undefined && (i = NaN);
      if(this.flg === i) return;
      this.flg = i;
    },
    diaoyong(f){
      return 'scaleY(' + +f + ')';
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';
@import '~@/style/public.less';
.contact-container{
  margin-top:40px;
  ul,li{
    padding:0;
    margin:0;
    list-style:none;
  }
  li{
    padding-left:20px;
    cursor:pointer;
    transition:background-color 1s ease;
    font-size:20px;
    &:hover{
      background-color:@gray;

     a{
       color:#fff;
     }
    }
    a{
      .self-line(40px);
       color:#ccc;
      .icon{
        display:inline-block;
        padding-right:15px;
      }
      position:relative;
      span{
        font-size:16px;
      }
      .show{
        transform:scaleY(0);
        transform-origin:center bottom;
        background-color:#fff;
        position:absolute;
        left:0;
        bottom:45px;
        width:150px;
        height:150px;
        border-radius:5px;
        padding:10px 15px;
        transition-duration:200ms;
        box-shadow:1px 2px 2px #ddd;

        img{
          width:100%;
          height:100%;
        }
        &:after{
          content:"";
          display:block;
          .self-triangle(#fff);
          position:absolute;
          width:20px;
          height:20px;
          box-sizing:border-box;
          .self-center();
          top:auto;
          bottom:-30px;
          z-index:10;
        }
      }
      .isShow{
        transform:scaleY(1);
      }
    }

  }
  }
</style>
