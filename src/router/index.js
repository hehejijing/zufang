import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout"
import Home from "@/views/home";
import Search from "@/views/search";
import News from "@/views/news";
import My from "@/views/my";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "./layout",
  },
  {
    path: "/layout",
    component: Layout,
    redirect: "./layout/home",
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "search",
        component: Search,
      },
      {
        path: "news",
        component: News,
      },
    
      {
        path: "my",
        component: My,
      },
    ]
  }
];
const router = new VueRouter({
  routes
});

export default router