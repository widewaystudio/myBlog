<template>
  <div class="blogComment-container">
    <h2>评论列表 ({{ list.total }})</h2>
    <div class="Comment-list">
      <div v-for="items in list.rows" :key="items.id" class="lists">
        <div class="avtar"><img :src="items.avatar" alt=""></div>
        <div class="right">
          <div class="top">
            <span class="name">{{ items.nickname }}</span>
            <span class="times">{{ Time(items.createDate, true) }}</span>
          </div>
          <div class="main">{{ items.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Time from '@/api/formatTime';

export default {
  name: "blogComment",
  props: {
    list: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    Time
  }
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';

.blogComment-container {
  .Comment-list {
    .lists {
      display: flex;
      border-bottom: 1px solid #ddd;
      padding-bottom: 15px;
      padding-top: 15px;

      .avtar {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        flex: 0 0 auto;
        border: 2px solid @gray;
        box-sizing: border-box;

        img {
          width: 100%;
          height: 100%;
        }

      }

      .right {
        flex: 1 1 auto;

        .top {
          height: 20px;
          width: 100%;
          position: relative;
          color: @success;

          .name {
            font-size: 16px;
            margin-left: 10px;
            font-weight: 500;
          }

          .times {
            position: absolute;
            right: 5px;
            top: 0;
            line-height: 20px;
            font-size: 12px;
            color: @linghtWords;
          }
        }

        .main {
          min-height: 30px;
          width: 100%;
          box-sizing: border-box;
          font-size: 14px;
          padding: 5px 10px;
          color: @words
        }


      }
    }
  }
}
</style>
