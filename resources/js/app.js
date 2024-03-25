import router from "./router";
import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";

createApp(App).use(router).mount("#app");
