import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import Api from "@/api/Peizhititle";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
});

router.afterEach((to) => {
  Api.routeSet(to.meta.name);
});

export default router;
