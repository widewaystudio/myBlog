<template>
<div class="test-container">
  <Contact :lists="list" />
</div>
</template>

<script>
import Contact from './index'
export default {
  name: "test",
  components:{
    Contact
  },
  data(){
    return{
      list:[
        {link:'/',icon:"ww",content:"349807393"},
        {link:'/',icon:"ww",content:"349807393"},
        {link:'/',icon:"ww",content:"349807393"},
        {link:'/',icon:"ww",content:"349807393"},
        {link:'/',icon:"ww",content:"349807393"},
        {link:'/',icon:"ww",content:"349807393",show:true,url:'http://pic.qcsdn.com/img/20190527/a451fc18b13bd77825cec3c23c985a18.png-zhu'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.test-container{
  width:500px;
  height:600px;
  margin:0 auto;
  border:1px solid #ddd;
  padding-top:300px;
  background-color:#ddd;
}
</style>
