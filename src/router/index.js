import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("@/views/MenuView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/CartView.vue"),
  },
  {
    path: "/transaction",
    name: "transaction",
    component: () => import("@/views/TransactionView.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("@/views/MessageView.vue"),
  },
  {
    path: "/feedback",
    name: "feedback",
    component: () => import("@/views/FeedbackView.vue"),
  },
  {
    path: "/others",
    name: "others",
    component: () => import("../views/OthersView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
