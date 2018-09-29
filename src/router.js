import Vue from "vue";
import Router from "vue-router";
import index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            name:"index",
            path:"/index",
            component:index
        }
    ]
});
