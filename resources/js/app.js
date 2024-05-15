import './bootstrap';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";
import '../css/app.css';

createApp(App).use(router).mount("#app");