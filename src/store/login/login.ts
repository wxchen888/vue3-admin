import router from '@/router'
import type { Module } from 'vuex'
import type { ILoginState } from './types'
import type { IRootState } from '../types'

import { setLocalStorage, getCache } from '@/utils/Cache'
import { login as doLogin } from '@/api/login'
import { getInitMenus } from '@/api/auth'
import { mapMenusToRoutes } from '@/utils/map-menu'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: {},
      permissions: []
    }
  },
  getters: {},
  mutations: {
    saveToken(state, token: string) {
      state.token = token
    },
    saveUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    saveUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 根据菜单映射路由
      // 添加后台返回路由
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        // console.log('route', route)
        router.addRoute('MainIndex', route)
      })

      // 检查按钮的权限
      // const permissions = menuMapToPermissions(userMenus)
      // state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, account: { name: string; password: string }) {
      //1.用户登录
      const res = await doLogin({ username: account.name, password: account.password })
      const { token, userInfo } = res.data.data

      setLocalStorage('USER_TOKEN', token)
      setLocalStorage('userInfo', userInfo)

      //2.用户菜单树
      const res2 = await getInitMenus()

      const userMenus = res2.data.data.permissionList
      console.log('userMenus', userMenus)
      commit('saveUserMenus', userMenus)
      setLocalStorage('userMenus', userMenus)

      //3.请求完全的角色和部门??

      //4.跳转到首页
      // 跳转到首页
      router.push('/dashboard')
    },
    loadLocalCache({ commit, dispatch }) {
      const token = getCache('USER_TOKEN')
      if (token) {
        commit('saveToken', token)
        // dispatch('getInitalDataAction', null, { root: true })
      }
      const userInfo = getCache('userInfo')
      if (userInfo) {
        commit('saveUserInfo', userInfo)
      }
      const userMenus = getCache('userMenus')
      if (userMenus) {
        commit('saveUserMenus', userMenus)
      }
    }
  }
}

export default login
