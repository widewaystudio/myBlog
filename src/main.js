import Vue from "vue";
import App from "./App.vue";
import router from "./Router/index.js";
import "./style/global.less";
import "./mock/";

import showMessage from "./Utils/showMessage.js";
import options from "./directives/Loading.js";
import lazy from "./directives/lazy.js";
import Bus from "./eventBus.js";
import store from "./store/";

Vue.prototype.bus = Bus;
Vue.prototype.showMessage = showMessage;
Vue.directive("lazy", lazy);
Vue.directive("loading", options);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
