import { IRootState } from './types'
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import type { IStore } from './types'
import login from './login/login'

import { findAllPermissions } from '@/api/auth'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'wangxc',
      entireRoles: [],
      entireDepartments: [],
      entireMenus: []
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})
export function useStore(): Store<IStore> {
  return useVuexStore()
}

export function setupStore() {
  store.dispatch('login/loadLocalCache')
  // store.dispatch('getInitalDataAction')
}

export default store
