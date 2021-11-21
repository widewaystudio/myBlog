<template>
  <div ref="box" v-loading="isLoading" class="home-container">
    <ul :style="{marginTop:marginTop+'px'}" class="img-container" @transitionend="setMoving($event)"
        @wheel="wheelHandle">
      <li v-for="item in data" :key="item.id">
        <CarouselItem :cur="index" :list="item"/>
      </li>
    </ul>
    <div v-show="index < count - 1" class="icon up" @click="setIndex(index+1)">
      <Icon type="angleDown"/>
    </div>
    <div v-show="index > 0" class="icon down" @click="setIndex(index - 1)">
      <Icon type="angleUp"/>
    </div>
    <ul class="indicator">
      <li v-for="(item,i) in data" :key="item.id" :class="{active:i === index}" @click="setIndex(i)">
      </li>
    </ul>

  </div>

</template>

<script>
import Icon from '@/components/Icon'
import CarouselItem from '@/components/CarouselItem'
import {mapState} from 'vuex';

export default {
  name: "index",
  components: {
    Icon,
    CarouselItem
  },
  data() {
    return {
      index: 0,
      conHeight: 0,
      moving: false
    }
  },
  created() {
    this.$store.dispatch('Banner/Setdata');
  },
  computed: {
    count() {
      return this.data.length;
    },
    marginTop() {
      return -this.index * this.conHeight;
    },
    ...mapState('Banner', ['isLoading', 'data'])
  },

  mounted() {
    this.conHeight = this.$refs.box.clientHeight;
    window.addEventListener("resize", this.changHeight);
  },
  methods: {

    setIndex: function (i) {
      this.index = i;
    },
    setMoving: function (e) {
      if (e.target.nodeName === "UL") {
        this.moving = false;
      }

    },
    changHeight: function () {
      this.conHeight = this.$refs.box.clientHeight;
    },
    wheelHandle: function (e) {
      if (this.moving === true) return;
      if (e.deltaY === 100) {
        if (this.index < this.count - 1) {
          this.moving = true;
          this.index++;
        }
      }
      if (e.deltaY === -100) {
        if (this.index > 0) {
          this.moving = true;
          this.index--;
        }
      }

    }
  },
  destroyed() {
    window.removeEventListener("resize", this.changHeight);
  }

}

</script>

<style lang="less" scoped>
@import '~@/style/public.less';
@import '~@/style/var.less';

.home-container {
  position: relative;
  width: 100%;
  height: 100%;

  .img-container {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: margin-top 0.8s ease-in-out;

    li {
      height: 100%;
      width: 100%;
    }
  }

  .icon {
    text-align: center;
    position: absolute;
    width: 80px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    cursor: pointer;
    color: @gray;
    @grap: 25px;

    &.down {
      top: @grap;
      animation: jump-up 1.2s ease-in-out infinite;
    }

    &.up {
      bottom: @grap;
      top: auto;
      animation: jump-down 1.2s ease-in-out infinite;
    }

    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }

  }

  .indicator {
    .self-vert(right);
    right: 20px;

    li {
      width: 10px;
      height: 10px;
      margin-bottom: 10px;
      border-radius: 50%;
      border: 5px solid #fff;
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: border-color 0.8s ease;

      &:hover, &.active {
        border-color: @danger;
        background-color: #fff;

      }
    }
  }


}
</style>
