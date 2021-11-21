<template>
  <div ref="container" v-loading="isLoading" class="blogList-container">
    <div class="blogs">
      <div v-for="item in data.rows" :key="item.id" class="blogList">
        <div class="img">
          <img v-lazy="item.thumb" alt="">
        </div>
        <div class="content">
          <RouterLink :to="{name:'Detail',params:{id:item.id}}"><h2>{{ item.title }}</h2></RouterLink>
          <p class="readnumber">
            <RouterLink :to="{name:'CateBlog',params:{categoryId:item.category.id}}"><span>{{
                item.category.name
              }}</span></RouterLink>
            <span>{{ item.scanNumber }}</span><span>{{ item.commentNumber }}</span><span>{{
              Time(item.createDate)
            }}</span>
          </p>
          <p class="description">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    <Pager :current="curinfo.p" :total="data.total" @pageChang="handle"/>
    <GoTop/>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';
import Pager from '@/components/Pager';
import GoTop from '@/goTop/';
import {getBlogs} from '@/api/blog';
import Time from '@/api/formatTime';

export default {
  name: "BlogList",
  components: {
    Pager,
    GoTop
  },
  mixins: [fetchData([])],
  methods: {
    Time,
    async fetchData() {
      return await getBlogs(this.curinfo.p, this.limit, this.curinfo.cateId);
    },
    handle(e) {
      let categoryId = this.$route.params.categoryId;
      if (categoryId) {
        this.$router.push({
          name: "CateBlog",
          params: {
            categoryId
          },
          query: {
            page: +e
          }
        });
      } else {
        this.$router.push({
          name: "Blog",
          query: {
            page: +e
          }
        })
      }
    },
    mainTop(e) {
      this.bus.$emit("BlogList", e);
    }
  },
  computed: {
    curinfo() {
      return {
        cateId: +this.$route.params.categoryId || -1,
        limit: this.data.rows ? this.data.rows.length : 10,
        p: +this.$route.query.page || 1,
      };
    }
  },
  watch: {
    "$route.query": async function () {
      this.$refs.container.scrollTop = 0;
      this.isLoading = true;
      this.data = await this.fetchData();
      this.isLoading = false;
    }
  },


  mounted() {
    this.$refs.container.addEventListener('scroll', this.mainTop);
  },
  beforeDestroy() {
    this.$refs.container.removeEventListener('scroll', this.mainTop);
  }

}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

.blogList-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  margin-bottom: 20px;
  scroll-behavior: smooth;

  .blogs {
    box-sizing: border-box;
    padding: 10px;


    .blogList {
      box-sizing: border-box;
      color: @words;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
      display: flex;
      height: 175px;
      align-items: center;

      h2 {
        margin-block-start: 0.2em;
        margin-block-end: 0.1em;
      }

      .img {
        width: 250px;
        height: 100%;
        flex: 0 0 auto;
        padding: 5px;
        box-sizing: border-box;
        display: flex;
        margin-right: 15px;
        align-items: center;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }

      .content {
        .readnumber {
          margin-block-start: 5px;
          margin-block-end: 5px;
        }

        .description {
          height: 63px;
          overflow: hidden;
          margin-block-start: 0.3em;
        }
      }
    }
  }
}
</style>
