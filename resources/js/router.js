import { createRouter, createWebHistory } from "vue-router";

import deteksiKanker from "./Pages/DeteksiKanker.vue";
import homePage from "./Pages/HomePage.vue";
import loginForm from "./Pages/LoginForm.vue";

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
    {
        path: "/login",
        component: loginForm,
        meta: { layout: "login" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
