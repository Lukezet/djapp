import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
   .use(pinia)
   .mount("#app");

