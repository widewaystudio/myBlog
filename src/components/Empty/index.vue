<template>
<div class="empty-container">
    <Icon type="code" />
    <div>{{text}}</div>
</div>
</template>

<script>
import Icon from '@/components/Icon';
export default {
  name: "index",
  components:{
    Icon
  },
  props:{
    text:{
      type:String,
      default:"无数据"
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/public.less";
@import "~@/style/var.less";
.empty-container{
 .self-center();
  color:@gray;
  text-align:center;
}
.icon-container{
  font-size:80px;
}

</style>
