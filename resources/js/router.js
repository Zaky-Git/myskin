import { createRouter, createWebHistory } from "vue-router";

import deteksiKanker from "./Pages/DeteksiKanker.vue";
import homePage from "./Pages/HomePage.vue";

const routes = [
    {
        path: "/",
        component: deteksiKanker,
        meta: { layout: "landing" },
    },
    {
        path: "/dashboard",
        component: homePage,
        meta: { layout: "dashboard" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
