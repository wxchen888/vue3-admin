import { createApp } from 'vue'
import App from './App.vue'
// import router from './router/routes'
import router from './router/index' //动态路由
import store, { setupStore } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
setupStore()
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
