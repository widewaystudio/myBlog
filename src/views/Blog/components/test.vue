<template>
  <div class="test-container">
    <List :list="list" @select="selectHandle"/>
  </div>
</template>

<script>
import List from './lists'

export default {
  name: "test",
  components: {
    List
  },
  methods: {
    selectHandle(e) {
      console.log(e);
    }
  },
  data() {
    return {
      list: [
        {name: 'a', isSelect: false},
        {name: 'b', isSelect: false},
        {
          name: 'c', isSelect: true,
          children: [
            {name: 'c-d', isSelect: false},
            {name: 'c-e', isSelect: false},
            {name: 'c-f', isSelect: true},
            {name: 'c-g', isSelect: false}]
        },
        {
          name: 'd', isSelect: false,
        }

      ],
      item: null
    }
  }
}
</script>

<style lang="less" scoped>
.test-container {
  width: 300px;
  height: 500px;
  position: relative;
  border: 1px solid #ddd;
  margin: 100px auto;
}
</style>
