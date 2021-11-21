<template>
  <div v-show="isShow" class="goTop-container" @click="Chandle">
    goTop
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      isShow: false,
      container: ''
    }
  },
  methods: {
    gotoTop(e) {
      this.container = e.target;
      this.isShow = this.container.scrollTop > 200 ? true : false;
    },
    Chandle() {
      this.container.scrollTop = 0;
    }
  },
  mounted() {
    this.bus.$on('mainScroll', this.gotoTop)
    this.bus.$on('BlogList', this.gotoTop)
  },
  destroyed() {
    this.bus.$off('mainScroll', this.gotoTop);
    this.bus.$off('BlogList', this.gotoTop);
  }
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';

.goTop-container {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  background-color: @primary;
  color: #fff;
  user-select: none;
  z-index: 100;

}

</style>
