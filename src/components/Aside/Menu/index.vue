<template>
<div class="menu-container">
  <RouterLink :exact="n.ex" :to="{name:n.name}" v-for="(n,i) in list" :key="i"  active-class="selected" exact-active-class="" >
    <Icon class="icon" :type="n.icon"/>
    <span>{{n.text}}</span>
  </RouterLink>
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
    list:{
      type:Array
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';
.menu-container{
  width:100%;
  box-sizing:border-box;
  background-color:#000;
  a{
    display:block;
    padding-left:60px;
    height:36px;
    line-height:36px;
    color:@gray;
    background-color:#000;
    transition:background-color 0.5s ease;
    &:hover{
      background-color:#474747;
      color:#fff;
      &.router-link-exact-active{
        background-color:#474747;
      }
    }
    .icon{
      font-size:18px;
      padding-right:10px;
    }
  }
  .selected{
    background-color:#252525;
  }
}
</style>
