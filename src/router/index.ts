import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TodoList from "../views/TodoList.vue";
import TodoItem from "../views/TodoItem.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/todo/:id",
    name: "Todo",
    component: TodoItem,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
