import getGlobal from "@/api/global";
import Api from "@/api/Peizhititle";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: [],
  },
  mutations: {
    setloading(state, payload) {
      state.isLoading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async asyncsetData(ctx) {
      const resp = await getGlobal();
      if (ctx.state.data.length === 0) {
        ctx.commit("setloading", true);
        ctx.commit("setData", resp);
        localStorage.setItem("title", resp.siteTile);
        Api.siteTitle(resp.siteTile);
        ctx.commit("setloading", false);
      }
    },
  },
};
