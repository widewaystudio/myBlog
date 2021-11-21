import getBanner from "@/api/banner";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async Setdata(ctx) {
      if (ctx.state.data.length === 0) {
        ctx.commit("setLoading", true);
        const resp = await getBanner();
        ctx.commit("setData", resp);
        ctx.commit("setLoading", false);
      }
    },
  },
};
