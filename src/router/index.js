import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout";
import Home from "@/views/home";
import Search from "@/views/search";
import News from "@/views/news";
import My from "@/views/my";
import Login from "@/views/login";
import Register from "@/views/register";
import Favorites from "@/views/favorites";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "./layout",
  },
  {
    path: "/favorites",
    component: Favorites,
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
      {
        path: "login",
        component: Login,
      },
      {
        path: "register",
        component: Register,
      },
      
    ],
  },
];
const router = new VueRouter({
  routes,
});

export default router;
