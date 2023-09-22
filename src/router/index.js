import { createRouter, createWebHistory } from "vue-router";

import vmodel from "../views/v-model/index.vue";
import user from "../views/user/index.vue";
import perkalian from "../views/perkalian/index.vue";
import login from "../views/login-todo/index.vue";
import infoAPI from "../views/infoapi/index.vue";
import todo from "../views/todo/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },

    {
      path: "/v-model",
      name: "v-model",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: vmodel,
    },
    {
      path: "/user",
      name: "user",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: user,
    },
    {
      path: "/perkalian",
      name: "perkalian",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: perkalian,
    },
    {
      path: "/login-todo",
      name: "login-todo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: login,
    },
    {
      path: "/infoapi",
      name: "infoapi",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: infoAPI,
    },
    {
      path: "/todo",
      name: "todo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: todo,
    },
  ],
});

export default router;
