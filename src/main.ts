import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/routes";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
