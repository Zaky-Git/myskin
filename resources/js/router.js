import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./Pages/homeRoute.vue"),
    },
    {
        path: "/test",
        component: () => import("./Pages/testRoute.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
