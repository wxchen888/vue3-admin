import { ElMessage } from 'element-plus'
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/dashboard/index.vue'
import Login from '../views/login/index.vue'
import MainIndex from '../views/mainIndex/index.vue'
import { setLocalStorage } from '@/utils/Cache'
//配置通用路由 无论什么角色都可以访问的页面
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/mainIndex',
    name: 'MainIndex',
    component: MainIndex,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/auth/user',
        name: 'User',
        component: () => import('@/views/auth/user/user.vue')
      },
      {
        path: '/auth/role',
        name: 'Role',
        component: () => import('@/views/auth/role/role.vue')
      },
      {
        path: '/auth/permission',
        name: 'Permission',
        component: () => import('@/views/auth/permission/permission.vue')
      }
    ]
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/notFound/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to: any, from, next) => {
  if (to.path !== '/login') {
    const token = localStorage.getItem('USER_TOKEN')
    if (!token) {
      ElMessage.error('没有权限!')
      return '/login'
    }

    if (to.path === '/mainIndex') {
      // console.log(firstRoute)
      // return firstRoute?.path
    }
  } else {
    setLocalStorage('currentItemIdx', '0')
  }
  next()
})

export default router
