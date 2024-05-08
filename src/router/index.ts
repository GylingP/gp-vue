
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name:'/',
    path: "/",
    redirect: "/index",
  },
  {
    name:'index',
    path: "/index",
    component: () => import("../views/IndexPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router