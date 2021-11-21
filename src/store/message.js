import { getMessage, postMessage } from "@/api/Message";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: {},
  },
  getters: {
    rows(c) {
      return c.data.rows;
    },
  },
  mutations: {
    setLoading(s, p) {
      s.isLoading = p;
    },
    setData(s, p) {
      s.data = p;
    },
    setDataTotal(s, p) {
      s.data.total = p;
    },
    setDataRows(s, p) {
      s.data.rows = p;
    },
  },
  actions: {
    async getMessage(c, p) {
      let temp = c.state.data;
      if (!temp.rows) {
        c.commit("setLoading", true);
        const resp = await getMessage(p.page, p.limit);
        c.commit("setData", resp);
        c.commit("setLoading", false);
      } else if (temp.rows.length < temp.total) {
        c.commit("setLoading", true);
        const resp = await getMessage(p.page, p.limit);
        c.commit("setData", {
          total: resp.total,
          rows: temp.rows.concat(resp.rows),
        });
        c.commit("setLoading", false);
      }
    },
    async postMessage(c, p) {
      c.commit("setLoading", true);
      let total = +c.state.data.total;
      let rows = c.state.data.rows;
      const resp = await postMessage(p.info);
      c.commit("setData", {
        total: ++total,
        rows: rows.concat([resp]),
      });
      c.commit("setLoading", false);
      p.callback("评论成功");
    },
  },
};
