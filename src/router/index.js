import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CampaignsPage from "../views/CampaignsPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/campaigns",
    name: "CampaignsPage",
    component: CampaignsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || "/"),
  routes,
});

export default router;
