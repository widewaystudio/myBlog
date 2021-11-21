import Vue from "vue";
import Vuex from "vuex";
import Globel from "./public.js";
import Banner from "./Banner.js";
import Details from "./Details";
import Message from "./message";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Globel,
    Banner,
    Details,
    Message,
  },
  strict: true,
});

export default store;
