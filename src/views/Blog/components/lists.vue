<template>
  <div class="list-container">
    <ul class="lists-item">
      <li v-for="(item,i) in list" :key="i">
        <div :class="{active:item.isSelect}" @click="handleClick(item)">{{ item.name }}
          <span v-if="item.articleCount">{{ item.articleCount }}</span></div>
        <Lists v-if="item.children" :list="item.children" @select="handleClick"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Lists",
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    handleClick(i) {
      if (!i.isSelect) {
        this.$emit("select", i);
      }

    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/style/public.less';
@import '~@/style/var.less';

.list-container {
  .lists-item {
    list-style: none;
    cursor: pointer;
    padding: 0;
    margin-top: 0.3em;
    margin-left: .2em;

    li {
      div {
        min-height: 2em;
        line-height: 2em;
      }
    }

    .lists-item {
      margin-top: 0.3em;
      margin-left: 2em;
    }

    .active {
      color: red;
    }
  }

}
</style>
