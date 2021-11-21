import { getBlog } from "@/api/blog";
import Api from "@/api/Peizhititle";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: [],
  },
  mutations: {
    setLoading(s, e) {
      s.isLoading = e;
    },
    setData(s, e) {
      s.data = e;
    },
  },
  actions: {
    async asyncData(c, p) {
      if (c.state.data.id !== p) {
        c.commit("setLoading", true);
        const resp = await getBlog(p);
        console.log(Object.prototype.toString.call(resp));
        Api.storeSet(resp.title);
        c.commit("setData", resp);
        c.commit("setLoading", false);
      }
      if (c.state.data.id) {
        Api.storeSet(c.state.data.title);
      }
    },
  },
};
