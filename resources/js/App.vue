<template>
    <div>
        <component :is="navbarComponent" />
        <router-view />
    </div>
</template>

<script>
import landingNavbar from "./Components/LandingNavbar.vue";
import dashboardNavbar from "./Components/DashboardNavbar.vue";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

export default {
    components: {
        landingNavbar,
        dashboardNavbar,
    },
    setup() {
        const route = useRoute();
        const navbarComponent = ref(null);

        watchEffect(() => {
            switch (route.meta.layout) {
                case "landing":
                    navbarComponent.value = landingNavbar;
                    break;
                case "dashboard":
                    navbarComponent.value = dashboardNavbar;
                    break;
                default:
                    navbarComponent.value = null;
            }
        });

        return {
            navbarComponent,
        };
    },
};
</script>
