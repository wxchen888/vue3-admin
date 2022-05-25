import { ElMessage } from "element-plus";
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  // createWebHashHistory,
} from "vue-router";
import { setLocalStorage } from "@/utils/Cache";
import Dashboard from "../views/dashboard/index.vue";
import Login from "../views/login/index.vue";
import MainIndex from "../views/mainIndex/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/mainIndex",
    name: "MainIndex",
    component: MainIndex,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/auth/user",
        name: "User",
        component: () => import("@/views/auth/user/user.vue"),
      },
      {
        path: "/auth/role",
        name: "Role",
        component: () => import("@/views/auth/role/role.vue"),
      },
      {
        path: "/auth/permission",
        name: "Permission",
        component: () => import("@/views/auth/permission/permission.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("USER_TOKEN");
  if (to.path !== "/login" && !token) {
    ElMessage.error("没有权限");
    router.push({ path: "/login" });
    return;
  } else if (to.path == "/login") {
    setLocalStorage("tab-index", "0");
  }
  next();
});

export default router;
