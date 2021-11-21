<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left">
        <Aside />
        </div>
      </template>
      <template #default>
        <div class="main">
           <RouterView />
        </div>
      </template>
    </Layout>
  </div>
</template>
<script>
import Layout from './components/Layout/'
import Aside from './components/Aside/'
export default{
  name: "App",
  components:{
   Layout,
    Aside
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
  .left{
    width:250px;
    height:100%;
  }
  .main{
    height:100%;
    position:relative;
  }

}
</style>
