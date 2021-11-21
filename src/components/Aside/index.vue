<template>
  <div class="aside-container">
    <Avater v-show="data" :size="150"
            :url="data.avatar ? data.avatar:''"></Avater>
    <h1 v-show="data">{{ data.siteTile ? data.siteTile : "&nbsp;" }}</h1>
    <Menu :list="items"></Menu>
    <Content :lists="list"></Content>
    <div class="beian">{{ data.icp }}</div>
  </div>
</template>

<script>
import Avater from '@/components/Avatar/';
import '@/style/global.less';
import Menu from './Menu/';
import Content from './Contact/';
import {mapState} from 'vuex';

export default {
  name: "index",
  components: {
    Avater,
    Menu,
    Content
  },
  computed: {
    ...mapState('Globel', ['data']),
    list() {
      return [
        {link: '/', icon: "ww", content: this.data.qq},
        {link: `mailto:${this.data.mail ? this.data.mail : '/'}`, icon: "email", content: this.data.mail},
        {link: '/', icon: "ww", content: this.data.weixin},
        {link: '/', icon: "serv", content: this.data.gitHubName},
        {
          link: '/',
          icon: "ww",
          content: this.data.qq,
          show: true,
          url: this.data.qqQ
        }
      ];
    }
  },
  data() {
    return {
      items: [
        {icon: "home", name: 'Home', text: '首页', ex: true},
        {icon: "home", name: 'Blog', text: '博客Blog', ex: false},
        {icon: "home", name: 'Message', text: '留言', ex: true},
        {icon: "home", name: 'About', text: '关于我', ex: true},
      ]
    }
  },
  created() {
    this.$store.dispatch('Globel/asyncsetData');
  }
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';

.aside-container {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #000;
  padding-top: 20px;
  box-sizing: border-box;

  img {
    display: block;
    margin: 0px auto;
    border: 5px solid #666;
  }

  h1 {
    display: block;
    text-align: center;
    color: @gray;
    padding: 0;
    margin: 20px 10px 15px;
    font-size: 20px;

  }

  .beian {
    margin-top: 30px;
    text-align: center;
    line-height: 20px;
    height: 20px;
    color: @gray;
    cursor: pointer;
  }
}
</style>
