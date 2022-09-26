import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { VuePaintNumbers } from "vue-paint-numbers";

createApp(App).use(VuePaintNumbers).mount("#app");
