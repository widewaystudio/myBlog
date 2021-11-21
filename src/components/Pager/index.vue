<template>
  <div class="pager-container" v-if="pageN > 1">
    <a @click="chuandi(1)" :class="{disable:current === 1}">first</a>
    <a @click="chuandi(current - 1)" :class="{disable:current === 1}">prev</a>
    <a @click="chuandi(n)" v-for="(n,i) in numbers" :key="i" :class="{active:current === n}">{{ n }}</a>
    <a @click="chuandi(current + 1)" :class="{disable:current === pageN}">next</a>
    <a @click="chuandi(pageN)" :class="{disable:current === pageN}">last</a>
  </div>
</template>

<script>
export default {
  name: "Pager",
  props:{
    current:{
      type:Number,
      default:1,
    },
    total:{
      type:Number,
      default:0,
    },
    limit:{
      type:Number,
      default:10,
    },
    visibleNumber:{
      type:Number,
      default:10,
    }
  },
  computed:{
    pageN(){
      return Math.ceil(this.total / this.limit);
    },
    mn(){
      return Math.floor(this.visibleNumber / 2);
    },
    rang(){
      let n = [1,this.visibleNumber];
      if(this.pageN > this.visibleNumber){
        if(this.current > this.mn){
          n[0] = this.current - this.mn;
          n[1] = this.current + this.mn -1;
        }
        if(this.current > this.pageN - this.mn){
          n[0] = this.pageN - this.visibleNumber + 1;
          n[1] = this.pageN;
        }
      }
      return n;
    },
    numbers(){
      let n = [];
      for(let i  = this.rang[0]; i <= this.rang[1]; i++){
        n.push(i);
      }
      return n;

    }
  },
  methods:{
    chuandi(p){
      if(p === this.current) return;
      p > this.pageN && (p = this.pageN);
      p < 1 && (p = 1);
      this.$emit("pageChang",p);
    }
  }

}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.pager-container{
  display:flex;
  justify-content:center;
  margin:20px 0;
  a{
    color:@primary;
    margin:0 10px;
    cursor:pointer;
    &.disable{
      color:@gray;
      cursor:text;
    }
    &.active{
      color:@danger;
    }
  }
}

</style>

