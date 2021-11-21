<template>
  <div id="comment" ref="from" class="formblog-container">
    <div class="nickName"><input v-model="info.nickName" placeholder="用户昵称" type="text"><span
        class="info-chart">{{ info.nickName.length }}/10</span></div>
    <div class="info-nickName">{{ error.nickName }}</div>
    <div class="message">
      <textarea id="" v-model="info.message" name=""></textarea>
      <span class="info-chart">{{ info.message.length }}/300</span>
    </div>
    <div class="info-nickName">{{ error.message }}</div>
    <div class="button">
      <button :class="{disable:isSubmit}" @click="handleClick">{{ !isSubmit ? "评论" : "提交中" }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "formblog",
  data() {
    return {
      info: {
        nickName: '',
        message: '',
      },
      error: {
        nickName: '',
        message: ''
      },
      isSubmit: false
    }
  },
  methods: {
    handleClick() {
      if (this.isSubmit) return;
      this.error.nickName = this.info.nickName === '' ? "请输入昵称!" : "";
      this.error.message = this.info.message === '' ? "请输入昵称!" : "";
      if (this.info.nickName === '' || this.info.message === '') return;
      this.isSubmit = true;
      this.$emit("submit", {
        info: this.info, callback: (e) => {

          this.showMessage({
            container: this.$refs.from,
            type: "success",
            context: e,
            callback: () => {
              this.info.nickName = '';
              this.info.message = '';
              this.isSubmit = false;
            }
          })

        }
      })
    }
  }

}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';

.formblog-container {
  min-height: 300px;
  box-sizing: border-box;
  position: relative;

  .nickName, .message {
    width: 80%;
    position: relative;

    input, textarea {
      height: 36px;
      line-height: 24px;
      padding: 0.3em 0.5em;
      border: 1px dashed #ddd;
      width: 100%;
      border-radius: 5px;
      outline-style: none;
      font-size: 14px;
      box-sizing: border-box;
    }

    textarea {
      height: 150px;
      resize: none;
    }

    .info-chart {
      position: absolute;
      right: 8px;
      top: 8px;
      color: @linghtWords;

    }
  }

  .message {
    width: 100%;
    box-sizing: border-box;

    .info-chart {
      top: auto;
      bottom: 0.8em;
    }
  }

  .info-nickName {
    height: 2em;
    line-height: 2em;
    color: @danger;
    font-size: 14px;
    font-weight: 500;
  }

  .button button {
    width: 110px;
    height: 46px;
    line-height: 46px;
    font-size: 16px;
    letter-spacing: 6px;
    background-color: @primary;
    color: #fff;
    border: 1px solid @primary;
    border-radius: 5px;
    cursor: pointer;

    &.disable {
      background-color: @gray;
      border-color: @gray;
    }
  }
}
</style>
