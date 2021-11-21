<template>
  <div class="blogToc-container">
    <h2>文章概要</h2>
    <List :list="selectItems" @select="selectHandle"/>
  </div>
</template>

<script>
import List from '@/views/Blog/components/lists';
import {Debounce} from '@/Utils/'

export default {
  name: "BlogToc",
  components: {
    List
  },
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      isActive: '',
      flg: true,
    }
  },
  computed: {
    titleDom() {
      let Arr = [];
      let ergodic = (item) => {
        for (let key in item) {
          Arr.push({
            name: item[key].name,
            anchor: item[key].anchor,
          });
          if (item[key].children) {
            ergodic(item[key].children);
          }
        }
      };
      ergodic(this.items);
      return Arr;
    },
    selectItems() {
      let erg = (item) => {
        if (!item) return;
        return item.map((e) => ({
          ...e,
          isSelect: e.anchor === this.isActive,
          children: erg(e.children),
        }));

      }
      return erg(this.items);

    }
  },

  methods: {
    selectHandle(e) {
      window.location.hash = e.anchor;
    },
    show() {
      this.isActive = '';
      window.location.hash = '';
      let H = 0;
      for (let i = 0; i < this.titleDom.length; i++) {
        if (document.getElementById(this.titleDom[i].anchor)) {
          let style = document.getElementById(this.titleDom[i].anchor).getBoundingClientRect();
          H = style.y;
          let temph = style.height;
          if (H > -temph) {
            this.isActive = this.titleDom[i].anchor;
            break;
          }
          if (i === this.titleDom.length - 1 && this.isActive === '') {
            this.isActive = this.titleDom[i].anchor;
          }
        }
      }

    }
  },
  created() {
    this.DebouShow = Debounce(this.show, 100);
    this.bus.$on("mainScroll", this.DebouShow);
  },
  updated() {
    if (this.isActive === '' && this.flg) {
      this.isActive = this.titleDom[0].anchor;
      this.flg = false;
    }
  },
  destroyed() {
    this.bus.$off("mainScroll", this.DebouShow);
  }
}
</script>

<style lang="less" scoped>
.blogToc-container {
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
}
</style>
