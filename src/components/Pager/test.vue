<template>
  <Pager :current="current" :total="total" @pageChang="handle"></Pager>
</template>

<script>
import Pager from './'

export default {
  name: "test.vue",
  components: {
    Pager
  },
  data() {
    return {
      current: 1,
      total: 300
    }
  },
  methods: {
    handle(e) {
      this.current = e;
    }
  }
}
</script>

<style scoped>

</style>
