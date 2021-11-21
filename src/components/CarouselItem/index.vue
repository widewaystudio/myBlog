<template>
  <div ref="carousel" class="carousel-container" @mouseleave="mouseoutHandle" @mousemove="MouseHandle">
    <div ref="carouselImg" :style="imagePosition" class="carousel-img">
      <ImageLoader :placeholder="list.midImg" :src="list.bigImg" @onload="showChart"/>
    </div>
    <div class="context">
      <span ref="title" class="h1">{{ list.title }}</span>
      <span ref="desc" class="desc">{{ list.description }}</span>
    </div>
  </div>

</template>

<script>
import ImageLoader from '@/components/ImageLoader';

export default {
  name: "index",
  components: {
    ImageLoader
  },
  props: {
    list: [],
    cur: {
      default: 0
    }
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      Contain: null,
      Imgsize: null,
      Mx: 0,
      My: 0,
      flg: false
    }
  },
  computed: {
    imagePosition() {
      if (!this.Contain || !this.Imgsize) {
        return;
      }
      const exWidth = this.Contain.w - this.Imgsize.w;
      const exHeight = this.Contain.h - this.Imgsize.h;
      const l = Math.floor(exWidth / this.Contain.w * this.Mx);
      const r = Math.floor(exHeight / this.Contain.h * this.My);
      return {
        transform: `translate(${l}px,${r}px)`
      };
    }
  },
  mounted() {
    let dom = this.$refs;
    this.titleWidth = dom.title.clientWidth;
    this.descWidth = dom.desc.clientWidth;
    this.$refs.title.style.transition = "1.5s 1s"
    this.$refs.desc.style.transition = "1.5s 2s";
    this.showChart();
    this.resize();
    this.mouseoutHandle();
    window.addEventListener("resize", this.resize);

  },
  methods: {
    showChart() {

      if (this.cur === this.list.id - 1) {
        this.$refs.title.style.opacity = '1';
        this.$refs.title.style.width = '0px';
        this.$refs.title.clientWidth;
        this.$refs.title.style.width = this.titleWidth + "px";
        this.$refs.desc.style.opacity = '1';
        this.$refs.desc.style.width = '0px';
        this.$refs.desc.clientWidth;
        this.$refs.desc.style.width = this.descWidth + "px";
        this.flg = false;
      }
    },
    resize() {
      let dom = this.$refs;
      this.Contain = {};
      this.Imgsize = {};
      this.Contain.w = dom.carousel.clientWidth;
      this.Contain.h = dom.carousel.clientHeight;
      this.Imgsize.w = dom.carouselImg.clientWidth;
      this.Imgsize.h = dom.carouselImg.clientHeight;
    },
    MouseHandle(e) {
      const Con = this.$refs.carousel.getBoundingClientRect();
      this.Contain.left = Con.left;
      this.Contain.top = Con.top;
      this.Mx = Math.floor(e.clientX - this.Contain.left);
      this.My = Math.floor(e.clientY - this.Contain.top);

    },
    mouseoutHandle() {
      this.Mx = this.$refs.carousel.clientWidth / 2;
      this.My = this.$refs.carousel.clientHeight / 2;
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
  watch: {
    cur() {
      if (this.cur === this.list.id - 1 && !this.flg) {
        this.flg = true;
        this.showChart();
      }
    }
  }
}
</script>

<style lang="less" scoped>
.carousel-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;

  .carousel-img {
    width: 120%;
    height: 120%;
    transition: 0.3s;
    position: absolute;
  }


  .context {
    position: absolute;
    top: 50%;
    left: 50px;

    span {
      display: block;
      color: #fff;
      text-shadow: 1px 0 2px rgba(0, 0, 0, .5), -1px 0 2px rgba(0, 0, 0, .5), 0 1px 2px rgba(0, 0, 0, .5),0 -1px 2px rgba(0, 0, 0, .5);
      font-size: 30px;
      font-weight: 500;
      letter-spacing: 5px;
      white-space: nowrap;
      overflow: hidden;

      &.h1 {
        opacity: 0;
        top: calc(50% - 50px);
        margin-bottom: 20px;
        font-size: 3em;
        font-weight: 400;
      }

      &.desc {
        opacity: 0;
      }
    }

  }

}
</style>
